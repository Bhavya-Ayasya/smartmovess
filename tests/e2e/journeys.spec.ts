import { expect, test, type Page } from "@playwright/test";

const uid = Date.now().toString(36);
const email = (tag: string) => `e2e+${tag}.${uid}@example.com`;

async function pick(page: Page, label: string | RegExp, option: string) {
  await page.getByRole("combobox", { name: label }).click();
  await page.getByRole("option", { name: option, exact: true }).click();
}

const ROUTES: [string, RegExp][] = [
  ["/", /Connecting Talent/],
  ["/for-employers", /Find the Talent/],
  ["/for-candidates", /Build Your Career/],
  ["/services", /Choose the Support/],
  ["/internship", /Start Your Career Journey/],
  ["/instagram-audit", /Turn Your Instagram/],
  ["/contact", /Let's Talk About/],
];

test.describe("routes", () => {
  for (const [path, h1] of ROUTES) {
    test(`${path} renders without errors or horizontal overflow`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(h1);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });
  }

  test("header navigation reaches every page", async ({ page, isMobile }) => {
    await page.goto("/");
    for (const [name, url] of [
      ["Employers", /for-employers/],
      ["Students", /for-candidates/],
      ["Services", /services/],
      ["Internship", /internship/],
      ["IG Audit", /instagram-audit/],
      ["Contact", /contact/],
    ] as const) {
      if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("navigation", { name: isMobile ? "Mobile" : "Primary" }).getByRole("link", { name, exact: true }).click();
      await expect(page).toHaveURL(url);
    }
  });
});

test.describe("internship enrollment", () => {
  test("validates, opens dropdowns, submits and shows success", async ({ page }) => {
    await page.goto("/internship");
    await page.getByRole("button", { name: "Enroll Now" }).first().click();
    const dialog = page.getByRole("dialog", { name: "Enroll in Our Internship Program" });
    await expect(dialog).toBeVisible();

    // empty submit → inline errors, no navigation
    await dialog.getByRole("button", { name: "Submit Enrollment Request" }).click();
    await expect(dialog.getByText("Full name is required")).toBeVisible();
    await expect(dialog.getByText("Email is required")).toBeVisible();
    await expect(page).toHaveURL(/\/internship$/);

    // invalid email shows the designed message
    await dialog.getByLabel("Full Name").fill("Alex Morgan");
    await dialog.getByLabel("Email Address").fill("alex.morgan@email");
    await dialog.getByLabel("Phone Number").fill("+91 90000 00000");
    await dialog.getByLabel("College / University Name").fill("ABC University");
    await dialog.getByLabel("Current Education / Qualification").fill("B.Tech");
    await pick(page, /Preferred Internship Domain/, "UI/UX Design");
    await pick(page, /Preferred Batch/, "Upcoming Batch");
    await dialog.getByRole("button", { name: "Submit Enrollment Request" }).click();
    await expect(dialog.getByText("Please enter a valid email address")).toBeVisible();

    await dialog.getByLabel("Email Address").fill(email("intern"));
    await dialog.getByRole("button", { name: "Submit Enrollment Request" }).click();
    await expect(page).toHaveURL(/\/internship\/enrolled/);
    await expect(page.getByRole("heading", { name: "Thank You for Your Interest!" })).toBeVisible();
    await page.getByRole("link", { name: "Back to Internship Program" }).click();
    await expect(page).toHaveURL(/\/internship$/);
  });

  test("closes with Escape and the close button", async ({ page }) => {
    await page.goto("/internship");
    await page.getByRole("button", { name: "Enroll Now" }).first().click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toBeHidden();
    await page.getByRole("button", { name: "Enroll Now" }).first().click();
    await page.getByRole("button", { name: "Close dialog" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
  });
});

test.describe("instagram audit", () => {
  test("submits the inquiry from the landing page", async ({ page }) => {
    await page.goto("/instagram-audit");
    await page.getByRole("button", { name: "Get Your Instagram Audit" }).first().click();
    const dialog = page.getByRole("dialog", { name: "Request Your Instagram Profile Audit" });
    await expect(dialog).toBeVisible();

    await dialog.getByRole("button", { name: "Submit Audit Request" }).click();
    await expect(dialog.getByText("Please enter your Instagram profile URL or username")).toBeVisible();

    await dialog.getByLabel("Full Name").fill("Ig User");
    await dialog.getByLabel("Email Address").fill(email("ig"));
    await dialog.getByLabel("Phone Number / WhatsApp").fill("+1 555 123 4567");
    await dialog.getByLabel("Business / Brand Name").fill("Brand Co");
    await dialog.getByLabel("Instagram Profile URL / Username").fill("@brandco");
    await pick(page, /Business Category/, "Coaching & Consulting");
    await pick(page, /Primary Instagram Goal/, "Generate More Enquiries");
    await pick(page, /^Country/, "USA");
    await dialog.getByLabel("Current Instagram Challenge").fill("Our Reels get views, but they do not lead to enquiries.");
    await dialog.getByRole("button", { name: "Submit Audit Request" }).click();
    await expect(page).toHaveURL(/\/instagram-audit\/submitted/);
    await expect(page.getByRole("heading", { name: /Instagram Audit Request Has Been Received/ })).toBeVisible();
  });
});

test.describe("page forms", () => {
  test("employer hiring requirements", async ({ page }) => {
    await page.goto("/for-employers#hiring");
    const form = page.locator("#hiring form");
    await form.getByRole("button", { name: "Submit Requirements" }).click();
    await expect(form.getByText("Company name is required")).toBeVisible();
    await form.getByLabel("Company Name").fill("Acme Pvt Ltd");
    await form.getByLabel("Contact Person").fill("Jo Rivera");
    await form.getByLabel("Email").fill(email("hire"));
    await form.getByLabel("Role Hiring For").fill("Sales Executive");
    await form.getByLabel("Number of Openings").fill("2");
    await form.getByRole("button", { name: "Submit Requirements" }).click();
    await expect(page.getByText("Thank you — we have your requirements")).toBeVisible();
  });

  test("contact message", async ({ page }) => {
    await page.goto("/contact#message");
    const form = page.locator("#message form");
    await form.getByLabel("Full Name").fill("Priya Sharma");
    await form.getByLabel("Email").fill(email("msg"));
    await form.getByRole("radio", { name: "Student" }).click();
    await form.getByLabel("Message").fill("I would like to know more about your services.");
    await form.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Message sent — thank you")).toBeVisible();
  });

  test("consultation booking (service preselected from the link)", async ({ page }) => {
    await page.goto("/contact?service=Mock%20Interview%20Session#booking");
    const form = page.locator("#booking form");
    await expect(form.getByRole("combobox", { name: /Service/ })).toContainText("Mock Interview Session");
    await form.getByLabel("Preferred Date").fill("2030-06-15");
    await pick(page, /Preferred Time/, "11:00 AM");
    await form.getByLabel("Full Name").fill("Priya Sharma");
    await form.getByLabel("Email").fill(email("book"));
    await form.getByRole("button", { name: "Confirm Booking" }).click();
    await expect(page.getByText("Booking request received")).toBeVisible();
  });
});

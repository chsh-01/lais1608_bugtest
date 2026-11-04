import { leapwork } from "./leapwork";

// ai-studio-step-id: MeTLsicM
await leapwork.step("Click the Show help button in the ServiceNow navigation bar", async () => {
    // Click img
    await page.getByRole('button', { name: 'Show help' }).click();
}, { action: "click", relativeXpath: ".//svg" });

// ai-studio-step-id: X5YE0vmh
await leapwork.step("Click Browse product documentation in the ServiceNow Help Center", async () => {
    // Click link "Browse product documentation"
    await page.getByRole('link', { name: 'Browse product documentation' }).click();
}, { action: "click", relativeXpath: ".//div/a" });

// ai-studio-step-id: pwuejt9700
await leapwork.step("Click the Agree and Proceed button on the cookie consent dialog", async () => {
    // Click button "Agree and Proceed"
    await page.getByText('Agree and Proceed').waitFor();
    await page.getByText('Agree and Proceed').click();
}, { action: "click", relativeXpath: ".//div/div/div[1]/div/div[4]/a[1]" });

// ai-studio-step-id: pwnl9fpl00
await leapwork.step("Click Close on the cookie preferences confirmation message", async () => {
    // Click button "Close"
    await page.getByText('Close').click();
}, { action: "click", relativeXpath: "//*[@id=\"gwt-debug-close_id\"]" });

// ai-studio-step-id: pw19rhi0f0
await leapwork.step("Click the APIs link in the ServiceNow Docs navigation.", async () => {
    // Click span
    await page.getByRole('link', { name: 'APIs' }).click();
}, { action: "click", relativeXpath: ".//span" });

// ai-studio-step-id: pwgw2qww00
await leapwork.step("Click the API implementation link in the ServiceNow API Reference documentation.", async () => {
    // Click span
    await page.getByRole('link', { name: 'API implementation Set up Web' }).click();
}, { action: "click", relativeXpath: ".//tbody/tr/td[1]/p/a/span[1]" });

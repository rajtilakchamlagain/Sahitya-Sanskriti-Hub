import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env.local') });

// Add this script to `package.json` to run it: "node scripts/send-notification.js"

const APP_ID = "d27f9ebb-440c-4e64-87e7-d2ae464c4439";
const REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY;

if (!REST_API_KEY) {
    console.error("❌ ERROR: ONESIGNAL_REST_API_KEY is not defined in .env.local");
    console.error("Please log into your OneSignal Dashboard -> Settings -> Keys & IDs, and copy the REST API Key.");
    process.exit(1);
}

const sendNotification = async (title, message, url) => {
    try {
        const response = await fetch('https://onesignal.com/api/v1/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Basic ${REST_API_KEY}`
            },
            body: JSON.stringify({
                app_id: APP_ID,
                included_segments: ['Subscribed Users'], // Target all subscribed users
                headings: { "en": title },
                contents: { "en": message },
                url: url || "https://sahityasanskriti.online",
                small_icon: "ic_stat_onesignal_default" // The icon to display in the Android notification bar
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("✅ Push Notification Sent Successfully!");
            console.log("Response:", data);
        } else {
            console.error("❌ Failed to send notification:", data);
        }
    } catch (error) {
        console.error("❌ Error sending notification:", error);
    }
};

// --- Execute ---
const args = process.argv.slice(2);
const title = args[0] || "New content on Sahitya Sanskriti!";
const message = args[1] || "Read our latest article, poem, or story today.";
const url = args[2] || "https://sahityasanskriti.online";

console.log(`Sending Notification -> Title: "${title}", Message: "${message}"`);
sendNotification(title, message, url);

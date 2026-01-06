'use server'

import fs from 'fs/promises';
import path from 'path';

export async function saveApplication(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const position = formData.get('position') as string;
    const resume = formData.get('resume') as string;
    const coverLetter = formData.get('coverLetter') as string;

    if (!name || !email || !position) {
        return { success: false, message: 'Name, Email, and Position are required.' };
    }

    const application = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        name,
        email,
        position,
        resume,
        coverLetter
    };

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'applications.json');

    try {
        // Ensure data directory exists
        await fs.mkdir(dataDir, { recursive: true });

        let applications = [];
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            applications = JSON.parse(fileContent);
        } catch (error) {
            // File likely doesn't exist or is empty, start with empty array
        }

        applications.push(application);

        await fs.writeFile(filePath, JSON.stringify(applications, null, 2));

        return { success: true, message: 'Application submitted successfully!' };
    } catch (error) {
        console.error('Error saving application:', error);
        return { success: false, message: 'Failed to submit application. Please try again.' };
    }
}

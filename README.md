This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## How to Create a New Category
Step 1: Navigate to app then data folder
Step 2: Find the category.tsx file
Step 3: Create a new category within here and add all the required information
Step 4: Navigate to app, then (routes)
Step 5: Create a folder with the new category you would like to add within (routes)
Step 6: Navigate back to app and create a folder with the same name as the one you made in routes. This folder will act as the main page that will populate the members in this new category.
Step 7: Navigate to any finished category folder in app (You can use Accountant).
Step 8: Copy the page.tsx file and paste it into the new folder you made.
Step 9: within page.tsx find "const realEstateMembers = Members.filter(member => member.type === 'Accountants');" and replace "Accountants" with the new category name that you made. 

## How to Create a New Member
Step 1: Navigate to app then components
Step 2: Open MemberInfo folder and find Member.TS
Step 3: Add in the member and fill out all the objects (you can leave them blank i.e string:"", if you dont have the information at this time)
Step 4: Navigate to (routes) folder and find the category folder you would like to add the new member in
Step 5: IMPORTANT: Please make the folder name the same way you spelt their name in Members.TS file. Any spaces between names must be added as "%20". "Firstname-Lastname" is the mandatory naming convention as well. 
# GitHub Pages Deployment Guide

## Prerequisites
- Your code is already pushed to GitHub
- You have `gh-pages` installed (already done)

## Step 1: Update Homepage URL

1. Open `package.json`
2. Find the `"homepage"` field
3. Replace `YOUR_USERNAME` with your GitHub username
4. Replace `YOUR_REPO_NAME` with your repository name

Example:
```json
"homepage": "https://zaidmohsin.github.io/meddi-website"
```

## Step 2: Deploy to GitHub Pages

Run the following command in your terminal:

```bash
npm run deploy
```

This will:
1. Build your React app for production
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Step 3: Enable GitHub Pages (if needed)

1. Go to your GitHub repository
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **gh-pages** branch
5. Click **Save**

Your website will be live in a few minutes!

## Updating Your Site

Whenever you make changes:
1. Commit and push your changes to the main branch
2. Run `npm run deploy` again
3. Wait a few minutes for GitHub Pages to update

## Troubleshooting

- **404 errors**: Make sure the homepage URL in `package.json` matches your GitHub username and repo name exactly
- **Blank page**: Check browser console for errors, ensure all asset paths are correct
- **Routing issues**: If using React Router, you may need to add a `404.html` file (not needed for this single-page app)

## Your Live URL

After deployment, your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`


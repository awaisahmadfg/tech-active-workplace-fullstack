# Push this project to GitHub and share

## 1. Create a new repo on GitHub

1. Go to **https://github.com/new**
2. Sign in if needed.
3. Set **Repository name** (e.g. `tech-active-workplace-fullstack`).
4. Choose **Public**.
5. Do **not** check "Add a README" (you already have one).
6. Click **Create repository**.

## 2. Push your code from this folder

In a terminal, from this project folder, run (replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repo name):

```bash
cd /home/codingcops/Documents/tech-active-workplace-fullstack/tech-active-workplace-fullstack-main

# If you haven't committed yet:
git add .
git commit -m "Add NFT stats dashboard and API"

# Add your new GitHub repo as remote (use the URL from GitHub’s “push” instructions):
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push (use main or master depending on your default branch):
git branch -M main
git push -u origin main
```

If GitHub shows you a different URL (e.g. SSH), use that instead of the `https://...` line.

## 3. Share with the reviewer

- **Option A:** Send them the repo link:  
  `https://github.com/YOUR_USERNAME/REPO_NAME`
- **Option B:** Add them as collaborator:  
  Repo → **Settings** → **Collaborators** → **Add people** → enter their GitHub username.

Then create a **Pull Request** (e.g. from a branch into `main`) or tell them to review the latest commit on `main`, and send that PR or repo link for the assessment.

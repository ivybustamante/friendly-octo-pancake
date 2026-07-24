# Git Basic Commands Cheat Sheet

## Check Git installation

```bash
git --version
```

Shows the installed Git version.

---

## Configure your Git name and email

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Check your Git settings:

```bash
git config --global --list
```

---

## Clone an existing project

```bash
git clone git@github.com:username/project-name.git
```

Move into the project folder:

```bash
cd project-name
```

---

## Check the current status

```bash
git status
```

Shows changed, new, and deleted files.

---

## Download the latest changes

```bash
git pull
```

Run this before starting work.

---

## See available branches

```bash
git branch
```

---

## Create a new branch

```bash
git checkout -b branch-name
```

Example:

```bash
git checkout -b update-buttons
```

---

## Switch to another branch

```bash
git checkout branch-name
```

Example:

```bash
git checkout main
```

---

## Add changed files

Add all changed files:

```bash
git add .
```

Add one specific file:

```bash
git add index.html
```

---

## Save changes in a commit

```bash
git commit -m "Describe your changes"
```

Example:

```bash
git commit -m "Update button styles"
```

Use `-m`, not `-M`.

---

## Upload changes to GitHub

For a new branch:

```bash
git push -u origin branch-name
```

Example:

```bash
git push -u origin update-buttons
```

After the first push, you can usually use:

```bash
git push
```

---

## See recent commits

```bash
git log --oneline
```

---

## Basic daily workflow

```bash
git pull
git checkout -b branch-name
git status
git add .
git commit -m "Describe your changes"
git push -u origin branch-name
```

After the branch has already been pushed once:

```bash
git status
git add .
git commit -m "Describe your changes"
git push
```

---

## Useful reminders

- Run `git pull` before starting work.
- Use a separate branch for each task.
- Check `git status` before committing.
- Write a short and clear commit message.
- Do not commit passwords, private keys, or `.env` files.

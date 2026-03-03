export { default } from './geopolitics-agent';
```
4. Click **Commit new file**

---

**STEP 5 — Make sure your JSX file is in the right place**
- Your `geopolitics-agent.jsx` file must be inside the **`src/`** folder
- If you uploaded it to the root, delete it and re-upload it as `src/geopolitics-agent.jsx`
  - Click **Add file** → **Create new file** → name it `src/geopolitics-agent.jsx` → paste the full code → commit

---

**STEP 6 — Redeploy on Vercel**
1. Go to **[vercel.com](https://vercel.com)** → your project
2. Click **Deployments** → click the 3 dots → **Redeploy**
3. Wait 1-2 mins ✅

---

Your repo structure should look like this when done:
```
intel-watch/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── App.js
    └── geopolitics-agent.jsx

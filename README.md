# Tech Active Workplace – Full Stack

## What’s implemented

- **Backend:** `GET /transactions/nft-stats` in `server/routes/transactions.js` — returns `{ totalNFTs, walletConnected }` with error handling.
- **Frontend:** NFT Stats page at `/dashboard/nft-stats` — two cards (Total NFTs, Wallet status), loading spinner, green/red badge, truncated wallet address. Uses `src/api/Api.js` and `src/context/WalletContext.jsx`.
- **Route:** `/dashboard/nft-stats` defined in `src/routes/routes.js` and used in the app.
- **Wallet:** Connect / Disconnect (mock) in the nav; badge and address update in real time.

---

## How to run

**1. Backend** (from project root):

```bash
cd server
npm install
npm start
```

Backend runs on **http://localhost:3001**.

**2. Frontend** (new terminal, from project root):

```bash
npm install
npm run dev
```

Frontend runs on **http://localhost:5173**. Start the backend first so the API works.

---

## How to test

1. Open **http://localhost:5173** (redirects to the dashboard) or **http://localhost:5173/dashboard/nft-stats**.
2. You should see:
   - **NFT Statistics** heading and two cards: **Total NFTs** (e.g. 0) and **Wallet status** (red “Not connected” badge).
3. Click **Connect wallet (mock)** in the top right:
   - Badge turns **green** (“Connected”).
   - Truncated address appears (e.g. `0x1234...7890`).
4. Click **Disconnect**:
   - Badge turns **red** (“Not connected”) and address text goes back to “Not connected”.

**API check (optional):**

```bash
curl http://localhost:3001/transactions/nft-stats
```

Expected: JSON with `totalNFTs` and `walletConnected`.

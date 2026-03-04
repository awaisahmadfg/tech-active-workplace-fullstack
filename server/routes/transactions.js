const express = require('express');

const router = express.Router();

router.get('/nft-stats', (req, res) => {
  try {
    const hasAuthHeader = Boolean(req.headers.authorization);
    // Mock total count; replace with DB query if needed, e.g. count from data layer
    const totalNFTs = 0;

    return res.status(200).json({
      totalNFTs,
      walletConnected: hasAuthHeader
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Failed to fetch NFT statistics'
    });
  }
});

module.exports = router;

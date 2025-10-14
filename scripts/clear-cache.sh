#!/bin/bash

# Script to clear Cloudflare cache for datagen.in
# This requires Cloudflare API credentials

echo "🧹 Clearing Cloudflare cache for datagen.in..."

# Check if CF_ZONE_ID and CF_API_TOKEN are set
if [ -z "$CF_ZONE_ID" ] || [ -z "$CF_API_TOKEN" ]; then
    echo "❌ Error: CF_ZONE_ID and CF_API_TOKEN environment variables must be set"
    echo ""
    echo "To set them:"
    echo "  export CF_ZONE_ID='your-zone-id'"
    echo "  export CF_API_TOKEN='your-api-token'"
    echo ""
    echo "Get your Zone ID from: Cloudflare Dashboard → Your Domain → Overview (right sidebar)"
    echo "Get your API Token from: Cloudflare Dashboard → My Profile → API Tokens → Create Token"
    exit 1
fi

# Purge all cache for the zone
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/purge_cache" \
     -H "Authorization: Bearer $CF_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}' \
     | jq '.'

echo ""
echo "✅ Cache purge request sent!"
echo "⏳ Wait 30 seconds for cache to clear, then hard refresh your browser"


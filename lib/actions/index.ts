"use server"

export async function scrapeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;
    try {
        const scrapedAmazonProduct(productUrl);
        
    } catch (error:any) {
        throw new Error(`Failed to create / update: ${error.message}`);
        
    }

    
}


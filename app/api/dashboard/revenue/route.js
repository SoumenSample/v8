import { connectToDatabase } from "@/lib/mongodb";
import Client from "@/lib/models/Client";

export async function GET(req) {
  try {
    console.log("=== Revenue API Started ===");
    
    // Step 1: Connect to DB
    try {
      await connectToDatabase();
      console.log("✓ Database connected");
    } catch (dbError) {
      console.error("✗ Database connection error:", dbError);
      throw new Error(`DB Connection failed: ${dbError.message}`);
    }

    // Step 2: Fetch all clients
    let allClients = [];
    try {
      allClients = await Client.find({});
      console.log("✓ Fetched all clients:", allClients.length);
    } catch (fetchError) {
      console.error("✗ Error fetching clients:", fetchError);
      throw new Error(`Failed to fetch clients: ${fetchError.message}`);
    }

    // Step 3: Log what we found
    if (allClients.length > 0) {
      console.log("Sample client:", {
        name: allClients[0].name,
        status: allClients[0].status,
        finalBudget: allClients[0].finalBudget,
        createdAt: allClients[0].createdAt
      });
    }

    // Step 4: Filter active clients
    let activeClients = [];
    try {
      activeClients = allClients.filter(c => c.status === "active");
      console.log("✓ Active clients filtered:", activeClients.length);
    } catch (filterError) {
      console.error("✗ Error filtering clients:", filterError);
      throw new Error(`Failed to filter clients: ${filterError.message}`);
    }

    // Step 5: Calculate revenue
    let totalRevenue = 0;
    try {
      activeClients.forEach((client) => {
        const budget = parseFloat(client.finalBudget) || 0;
        totalRevenue += budget;
      });
      console.log("✓ Revenue calculated:", totalRevenue);
    } catch (calcError) {
      console.error("✗ Error calculating revenue:", calcError);
      throw new Error(`Failed to calculate revenue: ${calcError.message}`);
    }

    // Step 6: Build response
    const response = {
      success: true,
      totalRevenue: Math.round(totalRevenue),
      monthlyRevenue: Math.round(totalRevenue),
      percentChange: "+0%",
      clientCount: activeClients.length,
      debug: {
        totalClientsInDB: allClients.length,
        activeClientsFound: activeClients.length
      }
    };

    console.log("✓ Response ready:", response);
    return Response.json(response);
    
  } catch (error) {
    console.error("✗ Revenue API error:", error.message);
    console.error("Stack:", error.stack);
    
    return Response.json(
      { 
        success: false, 
        error: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

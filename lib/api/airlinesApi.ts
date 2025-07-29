// API Response interface based on the actual API structure
interface AirlineApiResponse {
    id: number;
    code: string;
    iata_identifier: string;
    roster_system: string;
    display_name: string;
    login_payload_type: string;
    use_pwad: boolean;
    require_sso: boolean;
    airline_roster_system: number;
}

// Our existing airline interface
export interface Airline {
    icao: string;
    iata: string;
    name: string;
    roster_system: string;
    logo: string;
}

const API_BASE_URL = 'https://api.wingmanlog.com/v2/api';
const AUTH_TOKEN = 'ffe405ae9700ddec6456e45abfc8de950eb638f3';

// Transform API response to our expected format
function transformAirlineData(apiData: AirlineApiResponse): Airline {
    return {
        icao: apiData.code,
        iata: apiData.iata_identifier,
        name: apiData.display_name,
        roster_system: apiData.roster_system,
        logo: `https://content.airhex.com/content/logos/airlines_${apiData.iata_identifier}_701_200_r.png`
    };
}

// Fetch airlines from API
export async function fetchAirlines(): Promise<Airline[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/get-roster-urls/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${AUTH_TOKEN}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const apiData: AirlineApiResponse[] = await response.json();
        
        // Transform and filter the data
        const transformedData = apiData
            .map(transformAirlineData)
            .filter(airline => airline.iata && airline.name) // Filter out entries without IATA or name
            .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

        return transformedData;
    } catch (error) {
        console.error('Error fetching airlines:', error);
        throw error;
    }
}

// Cache for airline data to avoid repeated API calls
let cachedAirlines: Airline[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 1000 * 60 * 10; // 10 minutes

export async function getAirlines(): Promise<Airline[]> {
    const now = Date.now();
    
    // Return cached data if it's still fresh
    if (cachedAirlines && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
        return cachedAirlines;
    }
    
    // Fetch fresh data
    const airlines = await fetchAirlines();
    cachedAirlines = airlines;
    cacheTimestamp = now;
    
    return airlines;
} 
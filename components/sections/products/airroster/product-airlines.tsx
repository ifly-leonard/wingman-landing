import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";

const airlines = [
    {
        "icao": "air_asia_x",
        "iata": "D7",
        "name": "Air Asia X",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_asia_x_350_100_r.png"
    },
    {
        "icao": "wizz_air_uk",
        "iata": "W9",
        "name": "Wizz Air UK",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_wizz_air_uk_350_100_r.png"
    },
    {
        "icao": "german_wings",
        "iata": "4U",
        "name": "WDL Aviation",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_german_wings_350_100_r.png"
    },
    {
        "icao": "volotea",
        "iata": "V7",
        "name": "Volotea",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_volotea_350_100_r.png"
    },
    {
        "icao": "viva_aerobus",
        "iata": "VB",
        "name": "VivaAerobus",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_viva_aerobus_350_100_r.png"
    },
    {
        "icao": "viettravel",
        "iata": "VU",
        "name": "Vietravel Airlines",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_viettravel_350_100_r.png"
    },
    {
        "icao": "smartwings",
        "iata": "QS",
        "name": "SmartWings",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_smartwings_350_100_r.png"
    },
    {
        "icao": "air_tanker",
        "iata": "9L",
        "name": "AirTanker",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_tanker_350_100_r.png"
    },
    {
        "icao": "swiftair",
        "iata": "WT",
        "name": "Swiftair",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_swiftair_350_100_r.png"
    },
    {
        "icao": "safair",
        "iata": "FA",
        "name": "Safair",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_safair_350_100_r.png"
    },
    {
        "icao": "sky_express",
        "iata": "GQ",
        "name": "Sky Express",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_sky_express_350_100_r.png"
    },
    {
        "icao": "sun_country",
        "iata": "SY",
        "name": "Sun Country Airlines",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_sun_country_350_100_r.png"
    },
    {
        "icao": "scoot",
        "iata": "TR",
        "name": "Scoot",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_scoot_350_100_r.png"
    },
    {
        "icao": "s7_russia",
        "iata": "S7",
        "name": "S7 Airlines",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_s7_russia_350_100_r.png"
    },
    {
        "icao": "sata_group",
        "iata": "SP",
        "name": "Sata Group",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_sata_group_350_100_r.png"
    },
    {
        "icao": "rwandair",
        "iata": "WB",
        "name": "Rwandair",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_rwandair_350_100_r.png"
    },
    {
        "icao": "dhl_africa_mea",
        "iata": "DS",
        "name": "DHL Aviation BSC",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_dhl_africa_mea_350_100_r.png"
    },
    {
        "icao": "tarom",
        "iata": "RO",
        "name": "Tarom",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_tarom_350_100_r.png"
    },
    {
        "icao": "royal_brunei",
        "iata": "BI",
        "name": "Royal Brunei Airlines",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_royal_brunei_350_100_r.png"
    },
    {
        "icao": "horizon_air",
        "iata": "QX",
        "name": "Horizon Air",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_horizon_air_350_100_r.png"
    },
    {
        "icao": "omni_air",
        "iata": "OY",
        "name": "OMNI Air",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_omni_air_350_100_r.png"
    },
    {
        "icao": "national_air_cargo",
        "iata": "N8",
        "name": "National Air Cargo",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_national_air_cargo_350_100_r.png"
    },
    {
        "icao": "lion_air",
        "iata": "JT",
        "name": "Batik Air Malaysia",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_lion_air_350_100_r.png"
    },
    {
        "icao": "euro_atlantic",
        "iata": "YU",
        "name": "EuroAtlantic Airways",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_euro_atlantic_350_100_r.png"
    },
    {
        "icao": "marabu",
        "iata": "DI",
        "name": "Marabu",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_marabu_350_100_r.png"
    },
    {
        "icao": "flynas",
        "iata": "XY",
        "name": "Flynas",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_flynas_350_100_r.png"
    },
    {
        "icao": "kuwait_airways",
        "iata": "KU",
        "name": "Kuwait Airways",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_kuwait_airways_350_100_r.png"
    },
    {
        "icao": "jetsmart",
        "iata": "JA",
        "name": "Jetsmart",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_jetsmart_350_100_r.png"
    },
    {
        "icao": "irsair",
        "iata": "6H",
        "name": "Israir",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_irsair_350_100_r.png"
    },
    {
        "icao": "iberia_express",
        "iata": "I2",
        "name": "Iberia Express",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_iberia_express_350_100_r.png"
    },
    {
        "icao": "binter_canarias",
        "iata": "NT",
        "name": "Binter Canarias",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_binter_canarias_350_100_r.png"
    },
    {
        "icao": "atlas_air",
        "iata": "5Y",
        "name": "Atlas Air",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_atlas_air_350_100_r.png"
    },
    {
        "icao": "gulf_air",
        "iata": "GF",
        "name": "Gulf Air",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_gulf_air_350_100_r.png"
    },
    {
        "icao": "asl_airlines_fr",
        "iata": "5O",
        "name": "ASL Airlines France",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_asl_airlines_fr_350_100_r.png"
    },
    {
        "icao": "fiji_airlines",
        "iata": "FJ",
        "name": "Fiji Airlines",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_fiji_airlines_350_100_r.png"
    },
    {
        "icao": "aero_k",
        "iata": "RF",
        "name": "Aero K",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_aero_k_350_100_r.png"
    },
    {
        "icao": "aer_lingus",
        "iata": "EI",
        "name": "Aer Lingus",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_aer_lingus_350_100_r.png"
    },
    {
        "icao": "ara_jet",
        "iata": "DM",
        "name": "AraJet",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_ara_jet_350_100_r.png"
    },
    {
        "icao": "dhl_europe",
        "iata": "D0",
        "name": "DHL Europe",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_dhl_europe_350_100_r.png"
    },
    {
        "icao": "dhl_austria",
        "iata": "Q7",
        "name": "DHL AIR Austria GMBH",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_dhl_austria_350_100_r.png"
    },
    {
        "icao": "dhl_latam",
        "iata": "D5",
        "name": "DHL LATAM",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_dhl_latam_350_100_r.png"
    },
    {
        "icao": "air_creebec",
        "iata": "YN",
        "name": "Air Creebec",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_creebec_350_100_r.png"
    },
    {
        "icao": "copa_airlines",
        "iata": "CM",
        "name": "Copa Airlines",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_copa_airlines_350_100_r.png"
    },
    {
        "icao": "ba_cityflyer",
        "iata": "CJ",
        "name": "BA CityFlyer",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_ba_cityflyer_350_100_r.png"
    },
    {
        "icao": "china_airlines_taiwan",
        "iata": "CI",
        "name": "China Airlines Taiwan",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_china_airlines_taiwan_350_100_r.png"
    },
    {
        "icao": "euro_air_transport",
        "iata": "QY",
        "name": "European Air Transport",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_euro_air_transport_350_100_r.png"
    },
    {
        "icao": "bamboo_airways",
        "iata": "QH",
        "name": "Bamboo Airways",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_bamboo_airways_350_100_r.png"
    },
    {
        "icao": "air_asia_indonesia",
        "iata": "QZ",
        "name": "Indonesia AirAsia",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_asia_indonesia_350_100_r.png"
    },
    {
        "icao": "air_serbia",
        "iata": "JU",
        "name": "Air Serbia",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_serbia_350_100_r.png"
    },
    {
        "icao": "air_asia_phillippines",
        "iata": "Z2",
        "name": "Philippines Air Asia Inc",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_asia_phillippines_350_100_r.png"
    },
    {
        "icao": "air_belgium",
        "iata": "KF",
        "name": "Air Belgium",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_belgium_350_100_r.png"
    },
    {
        "icao": "air_algerie",
        "iata": "AH",
        "name": "Air Algerie",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_algerie_350_100_r.png"
    },
    {
        "icao": "ethiopian",
        "iata": "ET",
        "name": "Ethiopian",
        "roster_system": "sabre",
        "logo": "public/images/airline-logos/airlines_ethiopian_350_100_r.png"
    },
    {
        "icao": "hk_express",
        "iata": "HX",
        "name": "HK Express",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_hk_express_350_100_r.png"
    },
    {
        "icao": "cebu_pacific",
        "iata": "5J",
        "name": "Cebu Pacific",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_cebu_pacific_350_100_r.png"
    },
    {
        "icao": "air_india_new",
        "iata": "AI",
        "name": "Air India New",
        "roster_system": "sabre",
        "logo": "public/images/airline-logos/airlines_air_india_new_350_100_r.png"
    },
    {
        "icao": "aix_new",
        "iata": "IX",
        "name": "AIX New",
        "roster_system": "sabre",
        "logo": "public/images/airline-logos/airlines_aix_new_350_100_r.png"
    },
    {
        "icao": "fly91",
        "iata": "9X",
        "name": "Fly91",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_fly91_350_100_r.png"
    },
    {
        "icao": "royal_jordanian",
        "iata": "RJ",
        "name": "Royal Jordanian",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_royal_jordanian_350_100_r.png"
    },
    {
        "icao": "air_astana",
        "iata": "KC",
        "name": "Air Astana",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_astana_350_100_r.png"
    },
    {
        "icao": "air_arabia_ad",
        "iata": "G9",
        "name": "Air Arabia Abu Dhabi",
        "roster_system": "cesar",
        "logo": "public/images/airline-logos/airlines_air_arabia_ad_350_100_r.png"
    },
    {
        "icao": "air_arabia",
        "iata": "G9",
        "name": "Air Arabia Sharjah",
        "roster_system": "cesar",
        "logo": "public/images/airline-logos/airlines_air_arabia_350_100_r.png"
    },
    {
        "icao": "flyadeal",
        "iata": "F3",
        "name": "Flyadeal",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_flyadeal_350_100_r.png"
    },
    {
        "icao": "british_airways",
        "iata": "BA",
        "name": "British Airways",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_british_airways_350_100_r.png"
    },
    {
        "icao": "maldivian",
        "iata": "Q2",
        "name": "Maldivian Airlines",
        "roster_system": "iflight_lite",
        "logo": "public/images/airline-logos/airlines_maldivian_350_100_r.png"
    },
    {
        "icao": "quikjet",
        "iata": "QK",
        "name": "Quikjet",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_quikjet_350_100_r.png"
    },
    {
        "icao": "dhl_dhx",
        "iata": "ES",
        "name": "DHL DHX",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_dhl_dhx_350_100_r.png"
    },
    {
        "icao": "jazeera",
        "iata": "J9",
        "name": "Jazeera Airways",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_jazeera_350_100_r.png"
    },
    {
        "icao": "salam_air",
        "iata": "OV",
        "name": "Salam Air",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_salam_air_350_100_r.png"
    },
    {
        "icao": "wizz_air_abudhabi",
        "iata": "5W",
        "name": "Wizz Air Abu Dhabi",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_wizz_air_abudhabi_350_100_r.png"
    },
    {
        "icao": "akasa",
        "iata": "QP",
        "name": "Akasa Air",
        "roster_system": "sabre",
        "logo": "public/images/airline-logos/airlines_akasa_350_100_r.png"
    },
    {
        "icao": "flydubai",
        "iata": "FZ",
        "name": "Fly Dubai",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_flydubai_350_100_r.png"
    },
    {
        "icao": "vietjet",
        "iata": "VJ",
        "name": "Vietjet",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_vietjet_350_100_r.png"
    },
    {
        "icao": "flybig",
        "iata": "8E",
        "name": "Flybig",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_flybig_350_100_r.png"
    },
    {
        "icao": "alliance_air",
        "iata": "9I",
        "name": "Alliance Air",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_alliance_air_350_100_r.png"
    },
    {
        "icao": "star_air",
        "iata": "S5",
        "name": "Star Air",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_star_air_350_100_r.png"
    },
    {
        "icao": "air_asia",
        "iata": "AK",
        "name": "Air India Express Connect",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_air_asia_350_100_r.png"
    },
    {
        "icao": "etihad",
        "iata": "EY",
        "name": "Etihad",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_etihad_350_100_r.png"
    },
    {
        "icao": "trujet",
        "iata": "2T",
        "name": "Trujet",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_trujet_350_100_r.png"
    },
    {
        "icao": "vistara",
        "iata": "UK",
        "name": "Vistara",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_vistara_350_100_r.png"
    },
    {
        "icao": "spicejet",
        "iata": "SG",
        "name": "SpiceJet",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_spicejet_350_100_r.png"
    },
    {
        "icao": "indigo",
        "iata": "6E",
        "name": "Indigo",
        "roster_system": "aims2",
        "logo": "public/images/airline-logos/airlines_indigo_350_100_r.png"
    },
    {
        "icao": "air_india",
        "iata": "AI",
        "name": "Air India - OLD - DO NOT USE",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_air_india_350_100_r.png"
    },
    {
        "icao": "go_air",
        "iata": "G8",
        "name": "Go Air",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_go_air_350_100_r.png"
    },
    {
        "icao": "ai_express",
        "iata": "IX",
        "name": "AIX - OLD - DO NOT USE",
        "roster_system": "arms",
        "logo": "public/images/airline-logos/airlines_ai_express_350_100_r.png"
    }
];

const firstRow = airlines.slice(0, airlines.length / 20);
const secondRow = airlines.slice(airlines.length / 20);

// https://content.airhex.com/content/logos/airlines_{IATA_CODE}_701_200_r.png
// Write an inline function

const ReviewCard = ({
    icao,
    iata,
    name,
    roster_system,
    logo,
}: {
    icao: string;
    iata: string;
    name: string;
    roster_system: string;
    logo: string;    
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="">        
        {/* <img width="32" height="32" alt="" src={logo} /> */}
        <img alt={`${name}`} src={`https://content.airhex.com/content/logos/airlines_${iata}_701_200_r.png`} />
        <p className="text-xs font-medium text-center mt-2 text-gray-400">{name}</p>
      </div>      
    </figure>
  );
};

export default function AirrosterProductAirlines() {
  return (

    <section id="product-airlines" className="mb-20 z-10 overflow-hidden max-w-6xl">
        {/* <SectionHeader header="Integrations" subheader="You are in good company" /> */}
        <div className="flex w-full flex-col items-center justify-center overflow-auto">
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((airlines) => (
                    <ReviewCard key={airlines.icao} {...airlines} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:400s]">
                {secondRow.map((airlines) => (
                    <ReviewCard key={airlines.icao} {...airlines} />
                ))}
            </Marquee>
            
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        </div>

        <div>
            <p className="mt-20 text-2xl font-bold tracking-tighter leading-tight text-gray-900">
                AirRoster works with <span className="p-1 bg-blue-500 text-white rounded-md">20+ roster providers</span> covering <span className="p-1 bg-blue-500 text-white rounded-md">100+ airlines</span> in the 🌏                        
                <br />
                <span className="text-lg text-gray-700 font-normal tracking-normal">
                    Can't find your roster integration? <Link href="/support" className="text-blue-500 underline underline-offset-2 decoration-2">Write to us</Link>, and we'll integrate it for you. 
                </span>
            </p>
        </div>
    </section>    
  );
}

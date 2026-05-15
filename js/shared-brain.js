/**
 * Quench POS Shared Brain Engine
 * Coordinates client-side localized persistence boundaries
 */

// Universal Product Catalog Pricing and Type Identifiers
const PRODUCT_CATALOGUE = [
    { id: 'slim_refill', name: 'Slim 5-Gallon', desc: 'Refill Service Only', price: 2.00, type: 'refill', shape: 'slim' },
    { id: 'slim_new', name: 'Slim 5-Gallon', desc: 'New Container + Full Water', price: 12.00, type: 'new', shape: 'slim' },
    { id: 'round_refill', name: 'Round 5-Gallon', desc: 'Refill Service Only', price: 2.00, type: 'refill', shape: 'round' },
    { id: 'round_new', name: 'Round 5-Gallon', desc: 'New Container + Full Water', price: 12.00, type: 'new', shape: 'round' },
    { id: 'pet_1l', name: '1L Pet Bottle Pack', desc: 'Pre-sealed Single Bottle', price: 1.00, type: 'pet', shape: 'none' }
];

// Base Data Structure Blueprint Configuration 
let dbState = { 
    transactions: [], 
    customers: [], 
    inventory: { caps: 0, seals: 0, slimGallons: 0, roundGallons: 0 } 
};

/**
 * Pulls current memory snapshots out of the localStorage client layer
 */
function synchronizeSharedStateEngine() {
    const rawStorageData = localStorage.getItem('quench_pos_shared_brain');
    if (rawStorageData) {
        try { 
            dbState = JSON.parse(rawStorageData); 
        } catch(e) { 
            console.error("Critical State Engine Error: Shared data sync parse dropped.", e); 
        }
    }
}

/**
 * Commits structural schema adjustments securely to the storage engine
 */
function commitStateToStorageEngine() {
    localStorage.setItem('quench_pos_shared_brain', JSON.stringify(dbState));
}
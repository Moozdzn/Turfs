export const debugTurfTypes = {
    "MONEY": {
        "LEVEL": [
            {
                "price": 20000,
                "requirements": {
                    "hours": 0,
                    "minimum_points": 1000
                },
                "items": [
                    { "name": "dirtymoney", "chance": 1.0, "min": 20000, "max": 25000 },
                    { "name": "washcontract", "chance": 1.0, "min": 1, "max": 1, "info": { "value": 50000, "percentage": 0.03 } }
                ],
                "increment": 1.1,
                "membersToClaimRewards": 2,
                "membersToPreventDecay": 2
            },
            {
                "price": 50000,
                "requirements": {
                    "hours": 1,
                    "minimum_points": 2000
                },
                "items": [
                    { "name": "dirtymoney", "chance": 1.0, "min": 50000, "max": 75000 },
                    { "name": "washcontract", "chance": 1.0, "min": 1, "max": 1, "info": { "value": 100000, "percentage": 0.02 } }
                ],
                "increment": 1.2,
                "membersToClaimRewards": 4,
                "membersToPreventDecay": 4
            },
            {
                "price": 125000,
                "requirements": {
                    "hours": 3,
                    "minimum_points": 3000
                },
                "items": [
                    { "name": "dirtymoney", "chance": 1.0, "min": 125000, "max": 150000 },
                    { "name": "washcontract", "chance": 1.0, "min": 1, "max": 1, "info": { "value": 200000, "percentage": 0.01 } }
                ],
                "increment": 1.3,
                "membersToClaimRewards": 6,
                "membersToPreventDecay": 6
            }
        ]
    },
    "MATERIALS": {
        "LEVEL": [
            {
                "price": 50000,
                "requirements": {
                    "hours": 0,
                    "minimum_points": 1000
                },
                "items": [
                    {"name": "metalscrap", "chance": 1.0, "min": 175, "max": 250},
                    {"name": "rubber", "chance": 1.0, "min": 200, "max": 275},
                    {"name": "glass", "chance": 1.0, "min": 200, "max": 275}
                ],
                "increment": 1.1,
                "membersToClaimRewards": 2,
                "membersToPreventDecay": 2
            },
            {
                "price": 100000,
                "requirements": {
                    "hours": 2,
                    "minimum_points": 2000
                },
                "items": [
                    {"name": "metalscrap", "chance": 1.0, "min": 225, "max": 300},
                    {"name": "rubber", "chance": 1.0, "min": 250, "max": 325},
                    {"name": "glass", "chance": 1.0, "min": 250, "max": 325},
                    {"name": "aluminum", "chance": 0.6, "min": 250, "max": 325},
                    {"name": "steel", "chance": 0.6, "min": 250, "max": 300},
                    {"name": "plastic", "chance": 0.2, "min": 200, "max": 275}
                ],
                "increment": 1.2,
                "membersToClaimRewards": 4,
                "membersToPreventDecay": 4
            },
            {
                "price": 300000,
                "requirements": {
                    "hours": 3,
                    "minimum_points": 3000
                },
                "items": [
                    {"name": "metalscrap", "chance": 1.0, "min": 275, "max": 350},
                    {"name": "rubber", "chance": 1.0, "min": 300, "max": 375},
                    {"name": "glass", "chance": 1.0, "min": 300, "max": 375},
                    {"name": "aluminum", "chance": 0.6, "min": 250, "max": 325},
                    {"name": "steel", "chance": 0.6, "min": 250, "max": 300},
                    {"name": "iron", "chance": 0.6, "min": 750, "max": 1000},
                    {"name": "copper", "chance": 0.6, "min": 750, "max": 1000},
                    {"name": "plastic", "chance": 1.0, "min": 200, "max": 275}
                ],
                "increment": 1.3,
                "membersToClaimRewards": 6,
                "membersToPreventDecay": 6
            }
        ]        
    },
    "GUN_PARTS": {
        "LEVEL": [
            {
                "price": 50000,
                "requirements": {
                    "hours": 0,
                    "minimum_points": 1000
                },
                "items": [
                    {"name": "metal_spring", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "pistol_clip", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "pistol_grip", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "pistol_slide", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "gun_trigger", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "weapon_heavypistol", "chance": 0.5, "min": 1, "max": 1},
                    {"name": "pistol_ammo", "chance": 1.0, "min": 200, "max": 400},
                    {"name": "weaponblueprint", "chance": 0.5, "min": 1, "max": 1, "info": { "type": "HEAVYPISTOL", "max": 10, "durability": 1 }}
                ],
                "increment": 1.1,
                "membersToClaimRewards": 2,
                "membersToPreventDecay": 2
            },
            {
                "price": 200000,
                "requirements": {
                    "hours": 2,
                    "minimum_points": 2000
                },
                "items": [
                    {"name": "metal_spring", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "pistol_grip", "chance": 1.0, "min": 1, "max": 1},
                    {"name": "gun_trigger", "chance": 1.0, "min": 1, "max": 3},
                    {"name": "bolt_assembly", "chance": 0.8, "min": 1, "max": 1},
                    {"name": "smg_extractor", "chance": 0.8, "min": 1, "max": 1},
                    {"name": "smg_magazine", "chance": 0.8, "min": 1, "max": 1},
                    {"name": "smg_barrel", "chance": 0.8, "min": 1, "max": 1},
                    {"name": "weapon_hkump", "chance": 0.2, "min": 1, "max": 1},
                    {"name": "pistol_ammo", "chance": 1.0, "min": 300, "max": 400},
                    {"name": "smg_ammo", "chance": 1.0, "min": 200, "max": 400},
                    {"name": "weaponblueprint", "chance": 0.5, "min": 1, "max": 1, "info": { "type": "HKUMP", "max": 10, "durability": 1 }}
                ],
                "increment": 1.2,
                "membersToClaimRewards": 4,
                "membersToPreventDecay": 4
            },
            {
                "price": 300000,
                "requirements": {
                    "hours": 3,
                    "minimum_points": 3000
                },
                "items": [
                    {"name": "metal_spring", "chance": 1.0, "min": 1, "max": 3},
                    {"name": "gun_trigger", "chance": 1.0, "min": 1, "max": 3},
                    {"name": "ak_barrel", "chance": 0.7, "min": 1, "max": 1},
                    {"name": "ak_stock", "chance": 0.7, "min": 1, "max": 2},
                    {"name": "ak_magazine", "chance": 0.7, "min": 1, "max": 1},
                    {"name": "ak_bolt", "chance": 0.7, "min": 1, "max": 1},
                    {"name": "ak_barrel_pin", "chance": 0.7, "min": 1, "max": 1},
                    {"name": "ak_receiver_cover", "chance": 0.7, "min": 1, "max": 3},
                    {"name": "weapon_aks74u", "chance": 0.25, "min": 1, "max": 1},
                    {"name": "pistol_ammo", "chance": 1.0, "min": 300, "max": 400},
                    {"name": "smg_ammo", "chance": 1.0, "min": 200, "max": 400},
                    {"name": "rifle_ammo", "chance": 0.8, "min": 200, "max": 400},
                    {"name": "mg_ammo", "chance": 0.7, "min": 100, "max": 200},
                    {"name": "weaponblueprint", "chance": 0.25, "min": 1, "max": 1, "info": { "type": "ASSAULTRIFLE", "max": 10, "durability": 1 }},
                    {"name": "weapon_carbinerifle", "chance": 0.01, "min": 1, "max": 1},
  
                    {"name": "weaponblueprint", "chance": 0.005, "min": 1, "max": 1, "info": { "type": "BULLPUPRIFLE", "max": 10, "durability": 1 }, "fake": true},
                    {"name": "weaponblueprint", "chance": 0.02, "min": 1, "max": 1, "info": { "type": "MK47BANSHEE", "max": 10, "durability": 1 }, "fake": true}
                ],
                "increment": 1.3,
                "membersToClaimRewards": 6,
                "membersToPreventDecay": 6
            }
        ]
    },
    "DRUGS": {
        "LEVEL":[
            {
                "price": 50000,
                "requirements": {
                    "hours": 0,
                    "minimum_points": 1000
                },
                "items": [
                    {"name": "weed_brick_new", "chance": 1.0, "min": 3, "max": 5}
                ],
                "increment": 1.5,
                "membersToClaimRewards": 2,
                "membersToPreventDecay": 2
            },
            {
                "price": 100000,
                "requirements": {
                    "hours": 2,
                    "minimum_points": 2000
                },
                "items": [
                    {"name": "weed_brick_new", "chance": 1.0, "min": 5, "max": 10},
                    {"name": "blue_meth_baggy", "chance": 1.0, "min": 20, "max": 30},
                    {"name": "blue_meth_largebag", "chance": 0.2, "min": 1, "max": 1}
                ],
                "increment": 2,
                "membersToClaimRewards": 4,
                "membersToPreventDecay": 4
            },
            {
                "price": 300000,
                "requirements": {
                    "hours": 3,
                    "minimum_points": 3000
                },
                "items": [
                    {"name": "weed_brick_new", "chance": 1.0, "min": 10, "max": 20},
                    {"name": "blue_meth_baggy", "chance": 1.0, "min": 30, "max": 40},
                    {"name": "blue_meth_largebag", "chance": 0.4, "min": 1, "max": 1},
                    {"name": "coke_brick", "chance": 0.2, "min": 1, "max": 5}
                ],
                "increment": 3,
                "membersToClaimRewards": 6,
                "membersToPreventDecay": 6
            }
        ]
    }
  }
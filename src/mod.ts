import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

class REALISTIC_PMC_WEP implements IPostDBLoadMod
{

    private mod_config = require("../config/config.json");
    public postDBLoad(container: DependencyContainer): void
    {
        // get database from server
        const dbServer = container.resolve<DatabaseServer>("DatabaseServer");
        const db: IDatabaseTables = dbServer.getTables();


        // usec gear
        db.bots.types["usec"].inventory.equipment.FirstPrimaryWeapon = this.mod_config.usec_primary;
        db.bots.types["usec"].inventory.equipment.Holster = this.mod_config.usec_pistol;
        
        // bear gear
        db.bots.types["bear"].inventory.equipment.FirstPrimaryWeapon = this.mod_config.bear_primary;
        db.bots.types["bear"].inventory.equipment.Holster = this.mod_config.bear_pistol;

    }
}

export const mod = new REALISTIC_PMC_WEP();

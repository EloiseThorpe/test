// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014000203040403040202050202050302060204050404070a09010101010101010101010101010101010502010101010101010101010101010101010101050301010101010101010101010101010101010103050101010101010101010101010101010101010402010101010101010101010101010101010101050201010101010101010101010101010101010104020101010101010104040202020101010101010402010101010101010c0808080b01010101010105040101010101010104090808020101010101010402010101010101010c0402020c01010101010105040101010101010101010101010101010101010403010101010101010101010101010101010101040401010101010101010101010101010101010104050101010101010101010101010101010101010502010101010101010101010101010101010101020301010101010101010101010101010101010102040101010101010101010101010101010101010404010101010101010101010101010101010101040505040504050504040403050503050303050505`, img`
22222222222222222222
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2.......22222......2
2.......2..........2
2.......2...2......2
2.......22222......2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
2..................2
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedWest,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.floorDark3,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

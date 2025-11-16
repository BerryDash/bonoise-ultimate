gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDNewSpriteObjects1_1final = [];

gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects3= [];
gdjs.GameCode.GDNewTiledSprite2Objects1= [];
gdjs.GameCode.GDNewTiledSprite2Objects2= [];
gdjs.GameCode.GDNewTiledSprite2Objects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDFlatDarkJoystickObjects1= [];
gdjs.GameCode.GDFlatDarkJoystickObjects2= [];
gdjs.GameCode.GDFlatDarkJoystickObjects3= [];
gdjs.GameCode.GDBerryObjects1= [];
gdjs.GameCode.GDBerryObjects2= [];
gdjs.GameCode.GDBerryObjects3= [];
gdjs.GameCode.GDBerryNormalSpawnObjects1= [];
gdjs.GameCode.GDBerryNormalSpawnObjects2= [];
gdjs.GameCode.GDBerryNormalSpawnObjects3= [];
gdjs.GameCode.GDNewTextObjects1= [];
gdjs.GameCode.GDNewTextObjects2= [];
gdjs.GameCode.GDNewTextObjects3= [];
gdjs.GameCode.GDNewTiledSprite4Objects1= [];
gdjs.GameCode.GDNewTiledSprite4Objects2= [];
gdjs.GameCode.GDNewTiledSprite4Objects3= [];
gdjs.GameCode.GDSpeedySpawnerObjects1= [];
gdjs.GameCode.GDSpeedySpawnerObjects2= [];
gdjs.GameCode.GDSpeedySpawnerObjects3= [];
gdjs.GameCode.GDSpeedyObjects1= [];
gdjs.GameCode.GDSpeedyObjects2= [];
gdjs.GameCode.GDSpeedyObjects3= [];
gdjs.GameCode.GDNewText2Objects1= [];
gdjs.GameCode.GDNewText2Objects2= [];
gdjs.GameCode.GDNewText2Objects3= [];
gdjs.GameCode.GDPhysiscsObjects1= [];
gdjs.GameCode.GDPhysiscsObjects2= [];
gdjs.GameCode.GDPhysiscsObjects3= [];
gdjs.GameCode.GDRNGBerryObjects1= [];
gdjs.GameCode.GDRNGBerryObjects2= [];
gdjs.GameCode.GDRNGBerryObjects3= [];
gdjs.GameCode.GDrngspawnObjects1= [];
gdjs.GameCode.GDrngspawnObjects2= [];
gdjs.GameCode.GDrngspawnObjects3= [];
gdjs.GameCode.GDshadowberryObjects1= [];
gdjs.GameCode.GDshadowberryObjects2= [];
gdjs.GameCode.GDshadowberryObjects3= [];
gdjs.GameCode.GDcontrollerObjects1= [];
gdjs.GameCode.GDcontrollerObjects2= [];
gdjs.GameCode.GDcontrollerObjects3= [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDglitchedberryObjects1= [];
gdjs.GameCode.GDglitchedberryObjects2= [];
gdjs.GameCode.GDglitchedberryObjects3= [];
gdjs.GameCode.GDexplosionObjects1= [];
gdjs.GameCode.GDexplosionObjects2= [];
gdjs.GameCode.GDexplosionObjects3= [];
gdjs.GameCode.GDpoisonberryObjects1= [];
gdjs.GameCode.GDpoisonberryObjects2= [];
gdjs.GameCode.GDpoisonberryObjects3= [];
gdjs.GameCode.GDNewSprite2Objects1= [];
gdjs.GameCode.GDNewSprite2Objects2= [];
gdjs.GameCode.GDNewSprite2Objects3= [];
gdjs.GameCode.GDdoublejumpberryObjects1= [];
gdjs.GameCode.GDdoublejumpberryObjects2= [];
gdjs.GameCode.GDdoublejumpberryObjects3= [];
gdjs.GameCode.GDnojumpberryObjects1= [];
gdjs.GameCode.GDnojumpberryObjects2= [];
gdjs.GameCode.GDnojumpberryObjects3= [];
gdjs.GameCode.GDNewText3Objects1= [];
gdjs.GameCode.GDNewText3Objects2= [];
gdjs.GameCode.GDNewText3Objects3= [];
gdjs.GameCode.GDcombotimwObjects1= [];
gdjs.GameCode.GDcombotimwObjects2= [];
gdjs.GameCode.GDcombotimwObjects3= [];
gdjs.GameCode.GDMinusBerryObjects1= [];
gdjs.GameCode.GDMinusBerryObjects2= [];
gdjs.GameCode.GDMinusBerryObjects3= [];
gdjs.GameCode.GDCaffeineBerryObjects1= [];
gdjs.GameCode.GDCaffeineBerryObjects2= [];
gdjs.GameCode.GDCaffeineBerryObjects3= [];
gdjs.GameCode.GDGoodBerryObjects1= [];
gdjs.GameCode.GDGoodBerryObjects2= [];
gdjs.GameCode.GDGoodBerryObjects3= [];
gdjs.GameCode.GDLimeBerryObjects1= [];
gdjs.GameCode.GDLimeBerryObjects2= [];
gdjs.GameCode.GDLimeBerryObjects3= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBerryObjects1Objects = Hashtable.newFrom({"Berry": gdjs.GameCode.GDBerryObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpeedyObjects1Objects = Hashtable.newFrom({"Speedy": gdjs.GameCode.GDSpeedyObjects1});
gdjs.GameCode.asyncCallback17589260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText2"), gdjs.GameCode.GDNewText2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDNewText2Objects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(0);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17589260, gdjs.GameCode.asyncCallback17589260);
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDNewText2Objects1) asyncObjectsList.addObject("NewText2", obj);
for (const obj of gdjs.GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback17589260(runtimeScene, asyncObjectsList)), 17589260, asyncObjectsList);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRNGBerryObjects1Objects = Hashtable.newFrom({"RNGBerry": gdjs.GameCode.GDRNGBerryObjects1});
gdjs.GameCode.userFunc0xa65218 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// Obtenemos la escena actual
const scene = runtimeScene;

// Configuración del spawner
const minX = 0; // Límite izquierdo de aparición
const maxX = scene.getGame().getGameResolutionWidth(); // Límite derecho (ancho de pantalla)
const spawnY = -50; // Posición inicial (un poco arriba de la pantalla)
const berryTypes = ["Berry", "RNGBerry", "Speedy", "glitchedberry", "poisonberry", "shadowberry", "MinusBerry", "nojumpberry", "CaffieineBerry", "GoodBerry"];

// Intervalo en segundos entre cada spawn
const spawnInterval = 1.5;

// Verificamos si el temporizador existe; si no, lo creamos
if (!scene.getVariables().has("berryTimer")) {
    scene.getVariables().get("berryTimer").setNumber(0);
}

// Incrementamos el temporizador con el tiempo del frame actual
scene.getVariables().get("berryTimer").add(scene.getTimeManager().getElapsedTime() / 1000);

// Cuando el temporizador supera el intervalo...
if (scene.getVariables().get("berryTimer").getAsNumber() >= spawnInterval) {
    // Reseteamos el temporizador
    scene.getVariables().get("berryTimer").setNumber(0);

    // Elegimos un tipo de berry al azar
    const randomBerryName = berryTypes[Math.floor(Math.random() * berryTypes.length)];

    // Posición aleatoria en el eje X
    const randomX = Math.random() * (maxX - minX) + minX;

    // Creamos la berry en la escena
    const berry = scene.createObject(randomBerryName);
    if (berry) {
        berry.setPosition(randomX, spawnY);
    }
}

};
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDshadowberryObjects1Objects = Hashtable.newFrom({"shadowberry": gdjs.GameCode.GDshadowberryObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomInRange(1, 2) == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.randomInRange(1, 2) == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(5);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.GameCode.GDcontrollerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.GameCode.GDcontrollerObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.GameCode.GDPlayerObjects2[i].getPointX("")), (gdjs.GameCode.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDcontrollerObjects2Objects, 0, -(500), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
gdjs.GameCode.GDcontrollerObjects1.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.GameCode.GDPlayerObjects1[i].getPointX("")), (gdjs.GameCode.GDPlayerObjects1[i].getPointY("")) + 59, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDcontrollerObjects1Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDglitchedberryObjects1Objects = Hashtable.newFrom({"glitchedberry": gdjs.GameCode.GDglitchedberryObjects1});
gdjs.GameCode.asyncCallback17606708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17606708, gdjs.GameCode.asyncCallback17606708);
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.GameCode.asyncCallback17606708(runtimeScene, asyncObjectsList)), 17606708, asyncObjectsList);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.GameCode.GDcontrollerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRNGBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDglitchedberryObjects1ObjectsGDgdjs_9546GameCode_9546GDSpeedyObjects1ObjectsGDgdjs_9546GameCode_9546GDshadowberryObjects1ObjectsGDgdjs_9546GameCode_9546GDpoisonberryObjects1ObjectsGDgdjs_9546GameCode_9546GDnojumpberryObjects1ObjectsGDgdjs_9546GameCode_9546GDdoublejumpberryObjects1ObjectsGDgdjs_9546GameCode_9546GDMinusBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDCaffeineBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDGoodBerryObjects1Objects = Hashtable.newFrom({"RNGBerry": gdjs.GameCode.GDRNGBerryObjects1, "Berry": gdjs.GameCode.GDBerryObjects1, "glitchedberry": gdjs.GameCode.GDglitchedberryObjects1, "Speedy": gdjs.GameCode.GDSpeedyObjects1, "shadowberry": gdjs.GameCode.GDshadowberryObjects1, "poisonberry": gdjs.GameCode.GDpoisonberryObjects1, "nojumpberry": gdjs.GameCode.GDnojumpberryObjects1, "doublejumpberry": gdjs.GameCode.GDdoublejumpberryObjects1, "MinusBerry": gdjs.GameCode.GDMinusBerryObjects1, "CaffeineBerry": gdjs.GameCode.GDCaffeineBerryObjects1, "GoodBerry": gdjs.GameCode.GDGoodBerryObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.GameCode.GDexplosionObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpoisonberryObjects1Objects = Hashtable.newFrom({"poisonberry": gdjs.GameCode.GDpoisonberryObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDnojumpberryObjects1Objects = Hashtable.newFrom({"nojumpberry": gdjs.GameCode.GDnojumpberryObjects1});
gdjs.GameCode.asyncCallback17613628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxFallingSpeed(500, false);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17613628, gdjs.GameCode.asyncCallback17613628);
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.GameCode.asyncCallback17613628(runtimeScene, asyncObjectsList)), 17613628, asyncObjectsList);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMinusBerryObjects1Objects = Hashtable.newFrom({"MinusBerry": gdjs.GameCode.GDMinusBerryObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCaffeineBerryObjects1Objects = Hashtable.newFrom({"CaffeineBerry": gdjs.GameCode.GDCaffeineBerryObjects1});
gdjs.GameCode.asyncCallback17619084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17619084, gdjs.GameCode.asyncCallback17619084);
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GameCode.asyncCallback17619084(runtimeScene, asyncObjectsList)), 17619084, asyncObjectsList);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGoodBerryObjects1Objects = Hashtable.newFrom({"GoodBerry": gdjs.GameCode.GDGoodBerryObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Pixel Peeker Polka faster.mp3", 1, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "cool song leaked .mp3", 1, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Amazing Plan.mp3", 1, false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 4);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "chuckle park.mp3", 1, false, 100, 1);
}
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects1[k] = gdjs.GameCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects1[k] = gdjs.GameCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Berry"), gdjs.GameCode.GDBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoodBerry"), gdjs.GameCode.GDGoodBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("MinusBerry"), gdjs.GameCode.GDMinusBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.GameCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("RNGBerry"), gdjs.GameCode.GDRNGBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("combotimw"), gdjs.GameCode.GDcombotimwObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.GameCode.GDcontrollerObjects1);
gdjs.copyArray(runtimeScene.getObjects("glitchedberry"), gdjs.GameCode.GDglitchedberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("nojumpberry"), gdjs.GameCode.GDnojumpberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("poisonberry"), gdjs.GameCode.GDpoisonberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadowberry"), gdjs.GameCode.GDshadowberryObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBerryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRNGBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRNGBerryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDshadowberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDshadowberryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcontrollerObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDglitchedberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDglitchedberryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcontrollerObjects1[i].rotate(100, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDpoisonberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpoisonberryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDnojumpberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDnojumpberryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewText3Objects1[i].getBehavior("Text").setText("Kill Combo x" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "!");
}
}
{for(var i = 0, len = gdjs.GameCode.GDcombotimwObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcombotimwObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "combotime"), 2)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDMinusBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMinusBerryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.GameCode.GDGoodBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoodBerryObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Berry"), gdjs.GameCode.GDBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBerryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17584476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBerryObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Eat.mp3", false, 100, gdjs.randomFloatInRange(0.9, 1.2));
}
{for(var i = 0, len = gdjs.GameCode.GDBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.GameCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.GameCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("combotimw"), gdjs.GameCode.GDcombotimwObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlatDarkJoystickObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewText3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDcombotimwObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcombotimwObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.GameCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewTextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Speedy"), gdjs.GameCode.GDSpeedyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSpeedyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpeedyObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speedy"), gdjs.GameCode.GDSpeedyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpeedyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.GameCode.GDNewText2Objects1);
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDSpeedyObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDSpeedyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpeedyObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(700);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(5);
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RNGBerry"), gdjs.GameCode.GDRNGBerryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRNGBerryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRNGBerryObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Eat.mp3", false, 100, gdjs.randomFloatInRange(0.9, 1.2));
}
{for(var i = 0, len = gdjs.GameCode.GDRNGBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRNGBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(gdjs.randomInRange(0, 5));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BerryNormalSpawn"), gdjs.GameCode.GDBerryNormalSpawnObjects1);

const objects = gdjs.GameCode.GDBerryNormalSpawnObjects1;
gdjs.GameCode.userFunc0xa65218(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlatDarkJoystickObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlatDarkJoystickObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("Opacity").setOpacity(67);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadowberry"), gdjs.GameCode.GDshadowberryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDshadowberryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17599988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDshadowberryObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDshadowberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDshadowberryObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "e_double_sided.ogg", false, 100, 1);
}

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDNewSpriteObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDNewSpriteObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDNewSpriteObjects2[k] = gdjs.GameCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNewSpriteObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNewSpriteObjects1_1final.indexOf(gdjs.GameCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.GameCode.GDNewSpriteObjects1_1final.push(gdjs.GameCode.GDNewSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDNewSpriteObjects1_1final, gdjs.GameCode.GDNewSpriteObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("glitchedberry"), gdjs.GameCode.GDglitchedberryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDglitchedberryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17605444);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDglitchedberryObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "e_glitched.ogg", false, 100, gdjs.randomFloatInRange(0.9, 1.2));
}
{for(var i = 0, len = gdjs.GameCode.GDglitchedberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDglitchedberryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(3);
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Berry"), gdjs.GameCode.GDBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("CaffeineBerry"), gdjs.GameCode.GDCaffeineBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoodBerry"), gdjs.GameCode.GDGoodBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("MinusBerry"), gdjs.GameCode.GDMinusBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("RNGBerry"), gdjs.GameCode.GDRNGBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speedy"), gdjs.GameCode.GDSpeedyObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.GameCode.GDcontrollerObjects1);
gdjs.copyArray(runtimeScene.getObjects("doublejumpberry"), gdjs.GameCode.GDdoublejumpberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("glitchedberry"), gdjs.GameCode.GDglitchedberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("nojumpberry"), gdjs.GameCode.GDnojumpberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("poisonberry"), gdjs.GameCode.GDpoisonberryObjects1);
gdjs.copyArray(runtimeScene.getObjects("shadowberry"), gdjs.GameCode.GDshadowberryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDcontrollerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRNGBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDglitchedberryObjects1ObjectsGDgdjs_9546GameCode_9546GDSpeedyObjects1ObjectsGDgdjs_9546GameCode_9546GDshadowberryObjects1ObjectsGDgdjs_9546GameCode_9546GDpoisonberryObjects1ObjectsGDgdjs_9546GameCode_9546GDnojumpberryObjects1ObjectsGDgdjs_9546GameCode_9546GDdoublejumpberryObjects1ObjectsGDgdjs_9546GameCode_9546GDMinusBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDCaffeineBerryObjects1ObjectsGDgdjs_9546GameCode_9546GDGoodBerryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17607588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBerryObjects1 */
/* Reuse gdjs.GameCode.GDCaffeineBerryObjects1 */
/* Reuse gdjs.GameCode.GDGoodBerryObjects1 */
/* Reuse gdjs.GameCode.GDMinusBerryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.GameCode.GDNewText3Objects1);
/* Reuse gdjs.GameCode.GDRNGBerryObjects1 */
/* Reuse gdjs.GameCode.GDSpeedyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("combotimw"), gdjs.GameCode.GDcombotimwObjects1);
/* Reuse gdjs.GameCode.GDcontrollerObjects1 */
/* Reuse gdjs.GameCode.GDdoublejumpberryObjects1 */
/* Reuse gdjs.GameCode.GDglitchedberryObjects1 */
/* Reuse gdjs.GameCode.GDnojumpberryObjects1 */
/* Reuse gdjs.GameCode.GDpoisonberryObjects1 */
/* Reuse gdjs.GameCode.GDshadowberryObjects1 */
gdjs.GameCode.GDexplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDRNGBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRNGBerryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBerryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDglitchedberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDglitchedberryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDSpeedyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpeedyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDshadowberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDshadowberryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDpoisonberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpoisonberryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDnojumpberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDnojumpberryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDdoublejumpberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDdoublejumpberryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDMinusBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMinusBerryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCaffeineBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaffeineBerryObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGoodBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoodBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "combotime");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDexplosionObjects1Objects, (( gdjs.GameCode.GDcontrollerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDcontrollerObjects1[0].getPointX("")) - 100, (( gdjs.GameCode.GDcontrollerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDcontrollerObjects1[0].getPointY("")) - 100, "");
}
{for(var i = 0, len = gdjs.GameCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDexplosionObjects1[i].getBehavior("Scale").setScale(3);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ssvid.app--deltarune-explosion-greenscreen.mp3", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewText3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDcombotimwObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcombotimwObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("explosion"), gdjs.GameCode.GDexplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDexplosionObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDexplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDexplosionObjects1[k] = gdjs.GameCode.GDexplosionObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDexplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDexplosionObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDexplosionObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("poisonberry"), gdjs.GameCode.GDpoisonberryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDpoisonberryObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17610364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameCode.GDNewSprite2Objects1);
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDpoisonberryObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, (( gdjs.GameCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDNewSprite2Objects1[0].getPointX("")), (( gdjs.GameCode.GDNewSprite2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDNewSprite2Objects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDpoisonberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpoisonberryObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("nojumpberry"), gdjs.GameCode.GDnojumpberryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDnojumpberryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17612492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDnojumpberryObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Eat.mp3", false, 100, gdjs.randomFloatInRange(0.9, 1.2));
}
{for(var i = 0, len = gdjs.GameCode.GDnojumpberryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDnojumpberryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(3);
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(0, false);
}
}

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects1[k] = gdjs.GameCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "combotime") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.GameCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("combotimw"), gdjs.GameCode.GDcombotimwObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewText3Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDcombotimwObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcombotimwObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MinusBerry"), gdjs.GameCode.GDMinusBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMinusBerryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17616788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMinusBerryObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Eat.mp3", false, 100, gdjs.randomFloatInRange(0.7, 0.9));
}
{for(var i = 0, len = gdjs.GameCode.GDMinusBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMinusBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(-(15));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CaffeineBerry"), gdjs.GameCode.GDCaffeineBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCaffeineBerryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17618060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCaffeineBerryObjects1 */
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Powerup.mp3", false, 100, gdjs.randomFloatInRange(0.7, 0.9));
}
{for(var i = 0, len = gdjs.GameCode.GDCaffeineBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCaffeineBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(5);
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(1000);
}
}

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoodBerry"), gdjs.GameCode.GDGoodBerryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGoodBerryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17620268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGoodBerryObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Eat.mp3", false, 100, gdjs.randomFloatInRange(0.9, 1.2));
}
{for(var i = 0, len = gdjs.GameCode.GDGoodBerryObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGoodBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(10);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 4));
}

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDBerryObjects1.length = 0;
gdjs.GameCode.GDBerryObjects2.length = 0;
gdjs.GameCode.GDBerryObjects3.length = 0;
gdjs.GameCode.GDBerryNormalSpawnObjects1.length = 0;
gdjs.GameCode.GDBerryNormalSpawnObjects2.length = 0;
gdjs.GameCode.GDBerryNormalSpawnObjects3.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;
gdjs.GameCode.GDNewTextObjects3.length = 0;
gdjs.GameCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.GameCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.GameCode.GDNewTiledSprite4Objects3.length = 0;
gdjs.GameCode.GDSpeedySpawnerObjects1.length = 0;
gdjs.GameCode.GDSpeedySpawnerObjects2.length = 0;
gdjs.GameCode.GDSpeedySpawnerObjects3.length = 0;
gdjs.GameCode.GDSpeedyObjects1.length = 0;
gdjs.GameCode.GDSpeedyObjects2.length = 0;
gdjs.GameCode.GDSpeedyObjects3.length = 0;
gdjs.GameCode.GDNewText2Objects1.length = 0;
gdjs.GameCode.GDNewText2Objects2.length = 0;
gdjs.GameCode.GDNewText2Objects3.length = 0;
gdjs.GameCode.GDPhysiscsObjects1.length = 0;
gdjs.GameCode.GDPhysiscsObjects2.length = 0;
gdjs.GameCode.GDPhysiscsObjects3.length = 0;
gdjs.GameCode.GDRNGBerryObjects1.length = 0;
gdjs.GameCode.GDRNGBerryObjects2.length = 0;
gdjs.GameCode.GDRNGBerryObjects3.length = 0;
gdjs.GameCode.GDrngspawnObjects1.length = 0;
gdjs.GameCode.GDrngspawnObjects2.length = 0;
gdjs.GameCode.GDrngspawnObjects3.length = 0;
gdjs.GameCode.GDshadowberryObjects1.length = 0;
gdjs.GameCode.GDshadowberryObjects2.length = 0;
gdjs.GameCode.GDshadowberryObjects3.length = 0;
gdjs.GameCode.GDcontrollerObjects1.length = 0;
gdjs.GameCode.GDcontrollerObjects2.length = 0;
gdjs.GameCode.GDcontrollerObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDglitchedberryObjects1.length = 0;
gdjs.GameCode.GDglitchedberryObjects2.length = 0;
gdjs.GameCode.GDglitchedberryObjects3.length = 0;
gdjs.GameCode.GDexplosionObjects1.length = 0;
gdjs.GameCode.GDexplosionObjects2.length = 0;
gdjs.GameCode.GDexplosionObjects3.length = 0;
gdjs.GameCode.GDpoisonberryObjects1.length = 0;
gdjs.GameCode.GDpoisonberryObjects2.length = 0;
gdjs.GameCode.GDpoisonberryObjects3.length = 0;
gdjs.GameCode.GDNewSprite2Objects1.length = 0;
gdjs.GameCode.GDNewSprite2Objects2.length = 0;
gdjs.GameCode.GDNewSprite2Objects3.length = 0;
gdjs.GameCode.GDdoublejumpberryObjects1.length = 0;
gdjs.GameCode.GDdoublejumpberryObjects2.length = 0;
gdjs.GameCode.GDdoublejumpberryObjects3.length = 0;
gdjs.GameCode.GDnojumpberryObjects1.length = 0;
gdjs.GameCode.GDnojumpberryObjects2.length = 0;
gdjs.GameCode.GDnojumpberryObjects3.length = 0;
gdjs.GameCode.GDNewText3Objects1.length = 0;
gdjs.GameCode.GDNewText3Objects2.length = 0;
gdjs.GameCode.GDNewText3Objects3.length = 0;
gdjs.GameCode.GDcombotimwObjects1.length = 0;
gdjs.GameCode.GDcombotimwObjects2.length = 0;
gdjs.GameCode.GDcombotimwObjects3.length = 0;
gdjs.GameCode.GDMinusBerryObjects1.length = 0;
gdjs.GameCode.GDMinusBerryObjects2.length = 0;
gdjs.GameCode.GDMinusBerryObjects3.length = 0;
gdjs.GameCode.GDCaffeineBerryObjects1.length = 0;
gdjs.GameCode.GDCaffeineBerryObjects2.length = 0;
gdjs.GameCode.GDCaffeineBerryObjects3.length = 0;
gdjs.GameCode.GDGoodBerryObjects1.length = 0;
gdjs.GameCode.GDGoodBerryObjects2.length = 0;
gdjs.GameCode.GDGoodBerryObjects3.length = 0;
gdjs.GameCode.GDLimeBerryObjects1.length = 0;
gdjs.GameCode.GDLimeBerryObjects2.length = 0;
gdjs.GameCode.GDLimeBerryObjects3.length = 0;

gdjs.GameCode.eventsList7(runtimeScene);
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.GameCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.GameCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDBerryObjects1.length = 0;
gdjs.GameCode.GDBerryObjects2.length = 0;
gdjs.GameCode.GDBerryObjects3.length = 0;
gdjs.GameCode.GDBerryNormalSpawnObjects1.length = 0;
gdjs.GameCode.GDBerryNormalSpawnObjects2.length = 0;
gdjs.GameCode.GDBerryNormalSpawnObjects3.length = 0;
gdjs.GameCode.GDNewTextObjects1.length = 0;
gdjs.GameCode.GDNewTextObjects2.length = 0;
gdjs.GameCode.GDNewTextObjects3.length = 0;
gdjs.GameCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.GameCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.GameCode.GDNewTiledSprite4Objects3.length = 0;
gdjs.GameCode.GDSpeedySpawnerObjects1.length = 0;
gdjs.GameCode.GDSpeedySpawnerObjects2.length = 0;
gdjs.GameCode.GDSpeedySpawnerObjects3.length = 0;
gdjs.GameCode.GDSpeedyObjects1.length = 0;
gdjs.GameCode.GDSpeedyObjects2.length = 0;
gdjs.GameCode.GDSpeedyObjects3.length = 0;
gdjs.GameCode.GDNewText2Objects1.length = 0;
gdjs.GameCode.GDNewText2Objects2.length = 0;
gdjs.GameCode.GDNewText2Objects3.length = 0;
gdjs.GameCode.GDPhysiscsObjects1.length = 0;
gdjs.GameCode.GDPhysiscsObjects2.length = 0;
gdjs.GameCode.GDPhysiscsObjects3.length = 0;
gdjs.GameCode.GDRNGBerryObjects1.length = 0;
gdjs.GameCode.GDRNGBerryObjects2.length = 0;
gdjs.GameCode.GDRNGBerryObjects3.length = 0;
gdjs.GameCode.GDrngspawnObjects1.length = 0;
gdjs.GameCode.GDrngspawnObjects2.length = 0;
gdjs.GameCode.GDrngspawnObjects3.length = 0;
gdjs.GameCode.GDshadowberryObjects1.length = 0;
gdjs.GameCode.GDshadowberryObjects2.length = 0;
gdjs.GameCode.GDshadowberryObjects3.length = 0;
gdjs.GameCode.GDcontrollerObjects1.length = 0;
gdjs.GameCode.GDcontrollerObjects2.length = 0;
gdjs.GameCode.GDcontrollerObjects3.length = 0;
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDglitchedberryObjects1.length = 0;
gdjs.GameCode.GDglitchedberryObjects2.length = 0;
gdjs.GameCode.GDglitchedberryObjects3.length = 0;
gdjs.GameCode.GDexplosionObjects1.length = 0;
gdjs.GameCode.GDexplosionObjects2.length = 0;
gdjs.GameCode.GDexplosionObjects3.length = 0;
gdjs.GameCode.GDpoisonberryObjects1.length = 0;
gdjs.GameCode.GDpoisonberryObjects2.length = 0;
gdjs.GameCode.GDpoisonberryObjects3.length = 0;
gdjs.GameCode.GDNewSprite2Objects1.length = 0;
gdjs.GameCode.GDNewSprite2Objects2.length = 0;
gdjs.GameCode.GDNewSprite2Objects3.length = 0;
gdjs.GameCode.GDdoublejumpberryObjects1.length = 0;
gdjs.GameCode.GDdoublejumpberryObjects2.length = 0;
gdjs.GameCode.GDdoublejumpberryObjects3.length = 0;
gdjs.GameCode.GDnojumpberryObjects1.length = 0;
gdjs.GameCode.GDnojumpberryObjects2.length = 0;
gdjs.GameCode.GDnojumpberryObjects3.length = 0;
gdjs.GameCode.GDNewText3Objects1.length = 0;
gdjs.GameCode.GDNewText3Objects2.length = 0;
gdjs.GameCode.GDNewText3Objects3.length = 0;
gdjs.GameCode.GDcombotimwObjects1.length = 0;
gdjs.GameCode.GDcombotimwObjects2.length = 0;
gdjs.GameCode.GDcombotimwObjects3.length = 0;
gdjs.GameCode.GDMinusBerryObjects1.length = 0;
gdjs.GameCode.GDMinusBerryObjects2.length = 0;
gdjs.GameCode.GDMinusBerryObjects3.length = 0;
gdjs.GameCode.GDCaffeineBerryObjects1.length = 0;
gdjs.GameCode.GDCaffeineBerryObjects2.length = 0;
gdjs.GameCode.GDCaffeineBerryObjects3.length = 0;
gdjs.GameCode.GDGoodBerryObjects1.length = 0;
gdjs.GameCode.GDGoodBerryObjects2.length = 0;
gdjs.GameCode.GDGoodBerryObjects3.length = 0;
gdjs.GameCode.GDLimeBerryObjects1.length = 0;
gdjs.GameCode.GDLimeBerryObjects2.length = 0;
gdjs.GameCode.GDLimeBerryObjects3.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;

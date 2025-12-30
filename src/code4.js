gdjs.bossfightCode = {};
gdjs.bossfightCode.localVariables = [];
gdjs.bossfightCode.idToCallbackMap = new Map();
gdjs.bossfightCode.GDFireButtonObjects1_1final = [];

gdjs.bossfightCode.GDNewTiledSpriteObjects1= [];
gdjs.bossfightCode.GDNewTiledSpriteObjects2= [];
gdjs.bossfightCode.GDNewTiledSpriteObjects3= [];
gdjs.bossfightCode.GDNewTiledSprite2Objects1= [];
gdjs.bossfightCode.GDNewTiledSprite2Objects2= [];
gdjs.bossfightCode.GDNewTiledSprite2Objects3= [];
gdjs.bossfightCode.GDPlayerObjects1= [];
gdjs.bossfightCode.GDPlayerObjects2= [];
gdjs.bossfightCode.GDPlayerObjects3= [];
gdjs.bossfightCode.GDFlatDarkJoystickObjects1= [];
gdjs.bossfightCode.GDFlatDarkJoystickObjects2= [];
gdjs.bossfightCode.GDFlatDarkJoystickObjects3= [];
gdjs.bossfightCode.GDBerryObjects1= [];
gdjs.bossfightCode.GDBerryObjects2= [];
gdjs.bossfightCode.GDBerryObjects3= [];
gdjs.bossfightCode.GDBerryNormalSpawnObjects1= [];
gdjs.bossfightCode.GDBerryNormalSpawnObjects2= [];
gdjs.bossfightCode.GDBerryNormalSpawnObjects3= [];
gdjs.bossfightCode.GDbosshptetxObjects1= [];
gdjs.bossfightCode.GDbosshptetxObjects2= [];
gdjs.bossfightCode.GDbosshptetxObjects3= [];
gdjs.bossfightCode.GDNewTiledSprite4Objects1= [];
gdjs.bossfightCode.GDNewTiledSprite4Objects2= [];
gdjs.bossfightCode.GDNewTiledSprite4Objects3= [];
gdjs.bossfightCode.GDSpeedySpawnerObjects1= [];
gdjs.bossfightCode.GDSpeedySpawnerObjects2= [];
gdjs.bossfightCode.GDSpeedySpawnerObjects3= [];
gdjs.bossfightCode.GDSpeedyObjects1= [];
gdjs.bossfightCode.GDSpeedyObjects2= [];
gdjs.bossfightCode.GDSpeedyObjects3= [];
gdjs.bossfightCode.GDcpObjects1= [];
gdjs.bossfightCode.GDcpObjects2= [];
gdjs.bossfightCode.GDcpObjects3= [];
gdjs.bossfightCode.GDPhysiscsObjects1= [];
gdjs.bossfightCode.GDPhysiscsObjects2= [];
gdjs.bossfightCode.GDPhysiscsObjects3= [];
gdjs.bossfightCode.GDRNGBerryObjects1= [];
gdjs.bossfightCode.GDRNGBerryObjects2= [];
gdjs.bossfightCode.GDRNGBerryObjects3= [];
gdjs.bossfightCode.GDrngspawnObjects1= [];
gdjs.bossfightCode.GDrngspawnObjects2= [];
gdjs.bossfightCode.GDrngspawnObjects3= [];
gdjs.bossfightCode.GDExplotionObjects1= [];
gdjs.bossfightCode.GDExplotionObjects2= [];
gdjs.bossfightCode.GDExplotionObjects3= [];
gdjs.bossfightCode.GDKingCarlosObjects1= [];
gdjs.bossfightCode.GDKingCarlosObjects2= [];
gdjs.bossfightCode.GDKingCarlosObjects3= [];
gdjs.bossfightCode.GDPlayer2Objects1= [];
gdjs.bossfightCode.GDPlayer2Objects2= [];
gdjs.bossfightCode.GDPlayer2Objects3= [];
gdjs.bossfightCode.GDFireButtonObjects1= [];
gdjs.bossfightCode.GDFireButtonObjects2= [];
gdjs.bossfightCode.GDFireButtonObjects3= [];
gdjs.bossfightCode.GDcontrollerObjects1= [];
gdjs.bossfightCode.GDcontrollerObjects2= [];
gdjs.bossfightCode.GDcontrollerObjects3= [];
gdjs.bossfightCode.GDexplosionObjects1= [];
gdjs.bossfightCode.GDexplosionObjects2= [];
gdjs.bossfightCode.GDexplosionObjects3= [];
gdjs.bossfightCode.GDbosstextObjects1= [];
gdjs.bossfightCode.GDbosstextObjects2= [];
gdjs.bossfightCode.GDbosstextObjects3= [];
gdjs.bossfightCode.GDNewTextObjects1= [];
gdjs.bossfightCode.GDNewTextObjects2= [];
gdjs.bossfightCode.GDNewTextObjects3= [];
gdjs.bossfightCode.GDNewText3Objects1= [];
gdjs.bossfightCode.GDNewText3Objects2= [];
gdjs.bossfightCode.GDNewText3Objects3= [];
gdjs.bossfightCode.GDNewTiledSprite3Objects1= [];
gdjs.bossfightCode.GDNewTiledSprite3Objects2= [];
gdjs.bossfightCode.GDNewTiledSprite3Objects3= [];


gdjs.bossfightCode.asyncCallback11155780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfightCode.localVariables);
gdjs.bossfightCode.localVariables.length = 0;
}
gdjs.bossfightCode.idToCallbackMap.set(11155780, gdjs.bossfightCode.asyncCallback11155780);
gdjs.bossfightCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfightCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(8), (runtimeScene) => (gdjs.bossfightCode.asyncCallback11155780(runtimeScene, asyncObjectsList)), 11155780, asyncObjectsList);
}
}

}


};gdjs.bossfightCode.userFunc0x117d018 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// Obtenemos la escena actual
const scene = runtimeScene;

// Configuración del spawner
const minX = 0; // Límite izquierdo de aparición
const maxX = scene.getGame().getGameResolutionWidth(); // Límite derecho (ancho de pantalla)
const spawnY = -50; // Posición inicial (un poco arriba de la pantalla)
const berryTypes = ["poisonberry", "MinusBerry"];

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
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.bossfightCode.GDcontrollerObjects1});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDKingCarlosObjects1Objects = Hashtable.newFrom({"KingCarlos": gdjs.bossfightCode.GDKingCarlosObjects1});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.bossfightCode.GDexplosionObjects1});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfightCode.GDcontrollerObjects2});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfightCode.GDcontrollerObjects2});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects1Objects = Hashtable.newFrom({"controller": gdjs.bossfightCode.GDcontrollerObjects1});
gdjs.bossfightCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects2[k] = gdjs.bossfightCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects2 */
gdjs.bossfightCode.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfightCode.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfightCode.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects2[k] = gdjs.bossfightCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects2 */
gdjs.bossfightCode.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfightCode.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfightCode.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects, 0, -(500), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
gdjs.bossfightCode.GDcontrollerObjects1.length = 0;

{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.bossfightCode.GDPlayerObjects1[i].getPointX("")), (gdjs.bossfightCode.GDPlayerObjects1[i].getPointY("")) + 59, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects1Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


};gdjs.bossfightCode.asyncCallback11177444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfightCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BSRank", false);
}
gdjs.bossfightCode.localVariables.length = 0;
}
gdjs.bossfightCode.idToCallbackMap.set(11177444, gdjs.bossfightCode.asyncCallback11177444);
gdjs.bossfightCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfightCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.bossfightCode.asyncCallback11177444(runtimeScene, asyncObjectsList)), 11177444, asyncObjectsList);
}
}

}


};gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.bossfightCode.GDNewTextObjects1});
gdjs.bossfightCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.bossfightCode.GDNewTextObjects2 */
{for(var i = 0, len = gdjs.bossfightCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDNewTextObjects2[i].getBehavior("Opacity").setOpacity(gdjs.bossfightCode.GDNewTextObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}
}

}


};gdjs.bossfightCode.asyncCallback11181372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfightCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.bossfightCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.bossfightCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDNewTextObjects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.bossfightCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bossfightCode.localVariables.length = 0;
}
gdjs.bossfightCode.idToCallbackMap.set(11181372, gdjs.bossfightCode.asyncCallback11181372);
gdjs.bossfightCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfightCode.localVariables);
for (const obj of gdjs.bossfightCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bossfightCode.asyncCallback11181372(runtimeScene, asyncObjectsList)), 11181372, asyncObjectsList);
}
}

}


};gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDKingCarlosObjects1Objects = Hashtable.newFrom({"KingCarlos": gdjs.bossfightCode.GDKingCarlosObjects1});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.bossfightCode.GDPlayerObjects1});
gdjs.bossfightCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.bossfightCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.bossfightCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDNewTextObjects2[i].getBehavior("Opacity").setOpacity(gdjs.bossfightCode.GDNewTextObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}
}

}


};gdjs.bossfightCode.asyncCallback11184596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.bossfightCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "bossfight", false);
}

{ //Subevents
gdjs.bossfightCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.bossfightCode.localVariables.length = 0;
}
gdjs.bossfightCode.idToCallbackMap.set(11184596, gdjs.bossfightCode.asyncCallback11184596);
gdjs.bossfightCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.bossfightCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.bossfightCode.asyncCallback11184596(runtimeScene, asyncObjectsList)), 11184596, asyncObjectsList);
}
}

}


};gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfightCode.GDcontrollerObjects2});
gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects = Hashtable.newFrom({"controller": gdjs.bossfightCode.GDcontrollerObjects2});
gdjs.bossfightCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects2[k] = gdjs.bossfightCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects2 */
gdjs.bossfightCode.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfightCode.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfightCode.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects, 0, 500, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects2[k] = gdjs.bossfightCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects2 */
gdjs.bossfightCode.GDcontrollerObjects2.length = 0;

{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.bossfightCode.GDPlayerObjects2[i].getPointX("")), (gdjs.bossfightCode.GDPlayerObjects2[i].getPointY("")) + 59, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects2Objects, 0, -(500), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Woosh 3.aac", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.bossfightCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDFlatDarkJoystickObjects1[k] = gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDFlatDarkJoystickObjects1[k] = gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bosshptetx"), gdjs.bossfightCode.GDbosshptetxObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDbosshptetxObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDbosshptetxObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Duel Demake.mp3", 1, true, 100, 1);
}

{ //Subevents
gdjs.bossfightCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDFlatDarkJoystickObjects1[k] = gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BerryNormalSpawn"), gdjs.bossfightCode.GDBerryNormalSpawnObjects1);

const objects = gdjs.bossfightCode.GDBerryNormalSpawnObjects1;
gdjs.bossfightCode.userFunc0x117d018(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Up", null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDFlatDarkJoystickObjects1[k] = gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.bossfightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.bossfightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDPlayerObjects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Pathfinding").setSpeed(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfightCode.GDcontrollerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDcontrollerObjects1Objects, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDKingCarlosObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11165364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Berry"), gdjs.bossfightCode.GDBerryObjects1);
/* Reuse gdjs.bossfightCode.GDKingCarlosObjects1 */
gdjs.bossfightCode.GDexplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDexplosionObjects1Objects, (( gdjs.bossfightCode.GDKingCarlosObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDKingCarlosObjects1[0].getPointX("")), (( gdjs.bossfightCode.GDKingCarlosObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDKingCarlosObjects1[0].getPointY("")) - 10, "");
}
{for(var i = 0, len = gdjs.bossfightCode.GDBerryObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDBerryObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Health").Hit(5, true, true, null);
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDexplosionObjects1[i].getBehavior("Scale").setScale(2);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ssvid.app--deltarune-explosion-greenscreen.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("explosion"), gdjs.bossfightCode.GDexplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDexplosionObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDexplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDexplosionObjects1[k] = gdjs.bossfightCode.GDexplosionObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDexplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDexplosionObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDexplosionObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDKingCarlosObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Physics2").getLinearVelocityX() == gdjs.evtTools.common.pi() ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDKingCarlosObjects1[k] = gdjs.bossfightCode.GDKingCarlosObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDKingCarlosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDKingCarlosObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDKingCarlosObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Physics2").getLinearVelocityX() == -(200) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDKingCarlosObjects1[k] = gdjs.bossfightCode.GDKingCarlosObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDKingCarlosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDKingCarlosObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.bossfightCode.GDFireButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.bossfightCode.GDFireButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.bossfightCode.GDFireButtonObjects2);
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDFireButtonObjects2.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDFireButtonObjects2[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.bossfightCode.GDFireButtonObjects2[k] = gdjs.bossfightCode.GDFireButtonObjects2[i];
        ++k;
    }
}
gdjs.bossfightCode.GDFireButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.bossfightCode.GDFireButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.bossfightCode.GDFireButtonObjects1_1final.indexOf(gdjs.bossfightCode.GDFireButtonObjects2[j]) === -1 )
            gdjs.bossfightCode.GDFireButtonObjects1_1final.push(gdjs.bossfightCode.GDFireButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.bossfightCode.GDFireButtonObjects1_1final, gdjs.bossfightCode.GDFireButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11171444);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.bossfightCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfightCode.GDcontrollerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDcontrollerObjects1[i].getBehavior("Scale").setScale(0.4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDKingCarlosObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDKingCarlosObjects1[k] = gdjs.bossfightCode.GDKingCarlosObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDKingCarlosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDKingCarlosObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDKingCarlosObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDKingCarlosObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 1.5);
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "bs");
}

{ //Subevents
gdjs.bossfightCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.bossfightCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bosshptetx"), gdjs.bossfightCode.GDbosshptetxObjects1);
gdjs.copyArray(runtimeScene.getObjects("controller"), gdjs.bossfightCode.GDcontrollerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDbosshptetxObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDbosshptetxObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.bossfightCode.GDKingCarlosObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDKingCarlosObjects1[0].getBehavior("Health").Health(null))) + "/100");
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDNewText3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.bossfightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDPlayerObjects1[0].getBehavior("Health").Health(null))) + "/10");
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDcontrollerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDcontrollerObjects1[i].rotate(100, runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.bossfightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDPlayerObjects1[0].getBehavior("Health").Health(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDKingCarlosObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDKingCarlosObjects1[i].getBehavior("Health").IsJustDodged(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDKingCarlosObjects1[k] = gdjs.bossfightCode.GDKingCarlosObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDKingCarlosObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDKingCarlosObjects1 */
gdjs.bossfightCode.GDNewTextObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Lose 6.aac", false, 100, 1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDNewTextObjects1Objects, (( gdjs.bossfightCode.GDKingCarlosObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDKingCarlosObjects1[0].getPointX("")), (( gdjs.bossfightCode.GDKingCarlosObjects1.length === 0 ) ? 0 :gdjs.bossfightCode.GDKingCarlosObjects1[0].getPointY("")) - 10, "");
}

{ //Subevents
gdjs.bossfightCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KingCarlos"), gdjs.bossfightCode.GDKingCarlosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDKingCarlosObjects1Objects, gdjs.bossfightCode.mapOfGDgdjs_9546bossfightCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Health").IsJustDamaged(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.bossfightCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.bossfightCode.GDPlayerObjects1[k] = gdjs.bossfightCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.bossfightCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.bossfightCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.bossfightCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.bossfightCode.GDFireButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bs");
}
{for(var i = 0, len = gdjs.bossfightCode.GDFireButtonObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDFireButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "bs"), 2));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cp"), gdjs.bossfightCode.GDcpObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDcpObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDcpObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FireButton"), gdjs.bossfightCode.GDFireButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.bossfightCode.GDFlatDarkJoystickObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDFireButtonObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDFireButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDFlatDarkJoystickObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11189564);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.bossfightCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.bossfightCode.GDNewTiledSprite3Objects1);
{for(var i = 0, len = gdjs.bossfightCode.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDNewTiledSprite3Objects1[i].setXOffset(gdjs.bossfightCode.GDNewTiledSprite3Objects1[i].getXOffset() + (0.1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.bossfightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.bossfightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.bossfightCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


};

gdjs.bossfightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.bossfightCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.bossfightCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.bossfightCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.bossfightCode.GDPlayerObjects1.length = 0;
gdjs.bossfightCode.GDPlayerObjects2.length = 0;
gdjs.bossfightCode.GDPlayerObjects3.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.bossfightCode.GDBerryObjects1.length = 0;
gdjs.bossfightCode.GDBerryObjects2.length = 0;
gdjs.bossfightCode.GDBerryObjects3.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects1.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects2.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects3.length = 0;
gdjs.bossfightCode.GDbosshptetxObjects1.length = 0;
gdjs.bossfightCode.GDbosshptetxObjects2.length = 0;
gdjs.bossfightCode.GDbosshptetxObjects3.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects3.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects1.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects2.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects3.length = 0;
gdjs.bossfightCode.GDSpeedyObjects1.length = 0;
gdjs.bossfightCode.GDSpeedyObjects2.length = 0;
gdjs.bossfightCode.GDSpeedyObjects3.length = 0;
gdjs.bossfightCode.GDcpObjects1.length = 0;
gdjs.bossfightCode.GDcpObjects2.length = 0;
gdjs.bossfightCode.GDcpObjects3.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects1.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects2.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects3.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects1.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects2.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects3.length = 0;
gdjs.bossfightCode.GDrngspawnObjects1.length = 0;
gdjs.bossfightCode.GDrngspawnObjects2.length = 0;
gdjs.bossfightCode.GDrngspawnObjects3.length = 0;
gdjs.bossfightCode.GDExplotionObjects1.length = 0;
gdjs.bossfightCode.GDExplotionObjects2.length = 0;
gdjs.bossfightCode.GDExplotionObjects3.length = 0;
gdjs.bossfightCode.GDKingCarlosObjects1.length = 0;
gdjs.bossfightCode.GDKingCarlosObjects2.length = 0;
gdjs.bossfightCode.GDKingCarlosObjects3.length = 0;
gdjs.bossfightCode.GDPlayer2Objects1.length = 0;
gdjs.bossfightCode.GDPlayer2Objects2.length = 0;
gdjs.bossfightCode.GDPlayer2Objects3.length = 0;
gdjs.bossfightCode.GDFireButtonObjects1.length = 0;
gdjs.bossfightCode.GDFireButtonObjects2.length = 0;
gdjs.bossfightCode.GDFireButtonObjects3.length = 0;
gdjs.bossfightCode.GDcontrollerObjects1.length = 0;
gdjs.bossfightCode.GDcontrollerObjects2.length = 0;
gdjs.bossfightCode.GDcontrollerObjects3.length = 0;
gdjs.bossfightCode.GDexplosionObjects1.length = 0;
gdjs.bossfightCode.GDexplosionObjects2.length = 0;
gdjs.bossfightCode.GDexplosionObjects3.length = 0;
gdjs.bossfightCode.GDbosstextObjects1.length = 0;
gdjs.bossfightCode.GDbosstextObjects2.length = 0;
gdjs.bossfightCode.GDbosstextObjects3.length = 0;
gdjs.bossfightCode.GDNewTextObjects1.length = 0;
gdjs.bossfightCode.GDNewTextObjects2.length = 0;
gdjs.bossfightCode.GDNewTextObjects3.length = 0;
gdjs.bossfightCode.GDNewText3Objects1.length = 0;
gdjs.bossfightCode.GDNewText3Objects2.length = 0;
gdjs.bossfightCode.GDNewText3Objects3.length = 0;
gdjs.bossfightCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite3Objects3.length = 0;

gdjs.bossfightCode.eventsList8(runtimeScene);
gdjs.bossfightCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.bossfightCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.bossfightCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.bossfightCode.GDPlayerObjects1.length = 0;
gdjs.bossfightCode.GDPlayerObjects2.length = 0;
gdjs.bossfightCode.GDPlayerObjects3.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.bossfightCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.bossfightCode.GDBerryObjects1.length = 0;
gdjs.bossfightCode.GDBerryObjects2.length = 0;
gdjs.bossfightCode.GDBerryObjects3.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects1.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects2.length = 0;
gdjs.bossfightCode.GDBerryNormalSpawnObjects3.length = 0;
gdjs.bossfightCode.GDbosshptetxObjects1.length = 0;
gdjs.bossfightCode.GDbosshptetxObjects2.length = 0;
gdjs.bossfightCode.GDbosshptetxObjects3.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite4Objects3.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects1.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects2.length = 0;
gdjs.bossfightCode.GDSpeedySpawnerObjects3.length = 0;
gdjs.bossfightCode.GDSpeedyObjects1.length = 0;
gdjs.bossfightCode.GDSpeedyObjects2.length = 0;
gdjs.bossfightCode.GDSpeedyObjects3.length = 0;
gdjs.bossfightCode.GDcpObjects1.length = 0;
gdjs.bossfightCode.GDcpObjects2.length = 0;
gdjs.bossfightCode.GDcpObjects3.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects1.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects2.length = 0;
gdjs.bossfightCode.GDPhysiscsObjects3.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects1.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects2.length = 0;
gdjs.bossfightCode.GDRNGBerryObjects3.length = 0;
gdjs.bossfightCode.GDrngspawnObjects1.length = 0;
gdjs.bossfightCode.GDrngspawnObjects2.length = 0;
gdjs.bossfightCode.GDrngspawnObjects3.length = 0;
gdjs.bossfightCode.GDExplotionObjects1.length = 0;
gdjs.bossfightCode.GDExplotionObjects2.length = 0;
gdjs.bossfightCode.GDExplotionObjects3.length = 0;
gdjs.bossfightCode.GDKingCarlosObjects1.length = 0;
gdjs.bossfightCode.GDKingCarlosObjects2.length = 0;
gdjs.bossfightCode.GDKingCarlosObjects3.length = 0;
gdjs.bossfightCode.GDPlayer2Objects1.length = 0;
gdjs.bossfightCode.GDPlayer2Objects2.length = 0;
gdjs.bossfightCode.GDPlayer2Objects3.length = 0;
gdjs.bossfightCode.GDFireButtonObjects1.length = 0;
gdjs.bossfightCode.GDFireButtonObjects2.length = 0;
gdjs.bossfightCode.GDFireButtonObjects3.length = 0;
gdjs.bossfightCode.GDcontrollerObjects1.length = 0;
gdjs.bossfightCode.GDcontrollerObjects2.length = 0;
gdjs.bossfightCode.GDcontrollerObjects3.length = 0;
gdjs.bossfightCode.GDexplosionObjects1.length = 0;
gdjs.bossfightCode.GDexplosionObjects2.length = 0;
gdjs.bossfightCode.GDexplosionObjects3.length = 0;
gdjs.bossfightCode.GDbosstextObjects1.length = 0;
gdjs.bossfightCode.GDbosstextObjects2.length = 0;
gdjs.bossfightCode.GDbosstextObjects3.length = 0;
gdjs.bossfightCode.GDNewTextObjects1.length = 0;
gdjs.bossfightCode.GDNewTextObjects2.length = 0;
gdjs.bossfightCode.GDNewTextObjects3.length = 0;
gdjs.bossfightCode.GDNewText3Objects1.length = 0;
gdjs.bossfightCode.GDNewText3Objects2.length = 0;
gdjs.bossfightCode.GDNewText3Objects3.length = 0;
gdjs.bossfightCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.bossfightCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.bossfightCode.GDNewTiledSprite3Objects3.length = 0;


return;

}

gdjs['bossfightCode'] = gdjs.bossfightCode;

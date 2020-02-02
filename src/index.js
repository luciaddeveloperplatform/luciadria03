import { WebGLMap } from "@luciad/ria/view/WebGLMap";
import { getReference } from "@luciad/ria/reference/ReferenceProvider";
import { LonLatGrid } from "@luciad/ria/view/grid/LonLatGrid";
import { GridLayer } from "@luciad/ria/view/grid/GridLayer";

//  Imports for the luciadmapcontrols
import { ScaleIndicator, ZoomControl, MouseLocationComponent, LayerTreeControl  } from "luciadmapcontrols";
import "luciadmapcontrols/styles.css";

import "./index.scss";

const root = document.getElementById("root");

// Create an new html element to hold the map. Assing a class name so we can easy style it with css.
const mapElement = document.createElement("div");
mapElement.classList.add("MyLuciadMap");  
root.appendChild(mapElement);

// Create the map and fit to bounds
const map = new WebGLMap(mapElement, { reference: getReference("EPSG:4978") });

// Adding a Grid Layer to the Map
const gridModel = new LonLatGrid();
const gridLayer = new GridLayer(gridModel, {label: "Grid", id:"Grid"});
map.layerTree.addChild(gridLayer, "top");


// Adding some basic map controls
new ScaleIndicator(map);
new ZoomControl(map);
new MouseLocationComponent(map);

// Insert a html element to hold the layer control
const layerControlElement = document.createElement("div");
layerControlElement.id = 'layer-control-id';
mapElement.appendChild(layerControlElement);

// Adding a LayerTreeControl
new LayerTreeControl(map, {
    noLayerDelete: true,
    domId: "layer-control-id"
});

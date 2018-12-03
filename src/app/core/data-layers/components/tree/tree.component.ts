import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {TreeService} from './tree.service';
import {DataLayers} from '../../models/data-layers';
import {DataLayersLayer} from '../../models/data-layers-layer';
import {TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions} from 'angular-tree-component';

import * as L from 'leaflet';

@Component({
  selector: 'app-core-data-layers-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges {

  constructor(private treeService: TreeService) {
    this._options = {
      levelPadding: 40,
      useVirtualScroll: true,
      animateExpand: true,
      scrollOnActivate: true,
      animateSpeed: 30,
      animateAcceleration: 1.2
    };
  }

  nodes = [];
  // options = {};
  @Input() options: any = {};
  private readonly _options: any;

  private _nodes: DataLayers;
  private _nodesSubscribe: any;


  ngOnInit() {
    this._nodesSubscribe = this.treeService.observableTreeData.subscribe(data => {
      this.nodes = data.children;
    });
    this.options = Object.assign({}, this._options, this.options);
  }

  ngOnChanges(changes) {
    this.options = Object.assign({}, changes['options'].previousValue, changes['options'].currentValue);
  }

  treeNodeActivate(event?) {
    const node = event.node;
    if (node.isLeaf) {
      this.treeService.layerToMap(node.data);
    }

    /*if (!node.isFolder) {
      console.log(tree, node, $event);
      this.treeService.layerToMap(node.data);
      // TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    } else {
      console.log('expand');
      console.log(node.data.type);
      console.log(node.data.url);
    }*/

    // layerToMap
  }

}

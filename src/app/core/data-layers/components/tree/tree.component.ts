import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {TreeService} from './tree.service';
import {DataLayers} from '../../models/dataLayers';
import * as L from 'leaflet';

@Component({
  selector: 'app-core-data-layers-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges {
  nodes = [];
  // options = {};
  @Input() options: any = {};
  private _options: any;

  private _nodes: DataLayers;
  private _nodesSubscribe: any;

  constructor(private treeService: TreeService) {

  }

  ngOnInit() {
    this._nodesSubscribe = this.treeService.observableTreeData.subscribe(data => {
      this.nodes = data.children;
    });
    this._options = {
      // todo аналогично map
    };

  }

  ngOnChanges() {

  }

}

import {Component, OnInit} from '@angular/core';
import {TreeService} from './tree.service';
import {DataLayers} from '../../models/dataLayers';

@Component({
  selector: 'app-core-data-layers-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'},
        {id: 3, name: 'child3'}
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub'}
          ]
        }
      ]
    }
  ];
  options = {};

  private _nodes: DataLayers;
  private _nodesSubscribe: any;

  constructor(private treeService: TreeService) {

  }

  ngOnInit() {
    console.log('ngOnInit');

    this._nodesSubscribe = this.treeService.observableTreeData.subscribe(data => {
      this.nodes = data.children;
    });

  }

}

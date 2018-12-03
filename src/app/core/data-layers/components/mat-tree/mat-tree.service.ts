import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TodoItemNode} from './todo-item-node';
import {DataLayers} from '../../models/data-layers';
import {DataLayersService} from '../../data-layers.service';


/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null
    }
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular'
  ]
};

@Injectable()
export class MatTreeService {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  private _dataLayers: DataLayers;
  private _dataLayersSubscribe: any;


  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor(private dataLayersService: DataLayersService) {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    this._dataLayersSubscribe = this.dataLayersService.observableDataLayers.subscribe(tree_data => {
      // this._dataLayers = tree_data;
      console.log('mat-tree-service', tree_data);


      const data = this.buildFileTree(tree_data, 0);
      // TODO buildFileTree change
      console.log(data);

      // Notify the change.
      this.dataChange.next(data);

      // this.dataLayersToTreeData(this._dataLayers);
      // this.hwListService.updateHwId(options);
    }, error => {
      console.log(error);
    });


  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({item: name} as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

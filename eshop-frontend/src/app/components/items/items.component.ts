import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: any = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
      });
  }


}

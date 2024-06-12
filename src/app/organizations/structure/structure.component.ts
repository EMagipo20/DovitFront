import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.scss'
})
export class StructureComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getStructureClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 ){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}

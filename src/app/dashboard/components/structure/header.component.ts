import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    styleUrls: ['header.component.css'],
    template: `
        <div class="header">
            <p>{{ headerText }}</p>
        </div>
    `
})
export class HeaderComponent {
    public headerText: string = 'Тестирование'

}
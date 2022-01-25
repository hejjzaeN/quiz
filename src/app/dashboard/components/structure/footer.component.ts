import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    styleUrls: ['footer.component.css'],
    template: `
        <div class="footer_details">
            <p>{{ developer }} © {{ year }}</p>
            <p>Special for Ivan G.</p>
        </div>
    `
})
export class FooterComponent {
    public developer: string = 'Pavel V.'
    public year: number = new Date().getFullYear()
}
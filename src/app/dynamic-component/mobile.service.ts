import { Injectable } from "@angular/core";
import { MobileAdComponent } from "./mobile-ad/mobile-ad.component";
import { mobileItem } from "./mobile-item";
import { MobileProfileComponent } from "./mobile-profile/mobile-profile.component";


@Injectable()
export class MobileService
{

    getMobiles()
    {
        return [
            new mobileItem(
              MobileProfileComponent,
              { name: 'Bombasto', bio: 'Brave as they come' }
            ),
            new mobileItem(
              MobileProfileComponent,
              { name: 'Dr. IQ', bio: 'Smart as they come' }
            ),
            new mobileItem(
              MobileAdComponent,
              { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
            ),
            new mobileItem(
              MobileAdComponent,
              { headline: 'Openings in all departments', body: 'Apply today' }
            )
          ];
    }
}
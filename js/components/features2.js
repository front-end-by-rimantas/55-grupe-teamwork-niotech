export function features2() {    
 const HTML=`<div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 m-lg-3">
                    <div class="m-4 section-tag change">Our Features__<i class="fa fa-fire"></i></div>
                    <h2 class="top2">We Provide The Best Quality</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                <i class="fa fa-pie-chart"></i>
                <div class="ctext">
                <h class="upper">Sales Automation</h>
                <p class="p1">This title is versatile and can adapted</p> 
                <p class="p1">to fit the specific tone and branding of</p> 
                <p class="p1">your website quality.</p>
                </div>
                </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                <div class="card hi">
                <i class="fa fa-rotate-left"></i>
                <div class="ctext">
                <h class="upper">Contact Managment</h>
                <p class="p1">This title is versatile and can adapted</p> 
                <p class="p1">to fit the specific tone and branding of</p> 
                <p class="p1">your website quality.</p>
                </div>
                </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                <i class="fa fa-rebel"></i>
                <div class="ctext">
                <h class="upper">Task Managment</h>
                <p class="p1">This title is versatile and can adapted</p> 
                <p class="p1">to fit the specific tone and branding of</p> 
                <p class="p1">your website quality.</p>
                </div>
                </div>
                </div>
        </div>`

document
         .getElementById('app')
         .insertAdjacentHTML('beforeend', HTML);
}

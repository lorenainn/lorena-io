import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    var menu_icon = (<any>$)('<span class="menu-icon">Menu</span>');
  	var toggle_button = (<any>$)('<a>', {                         
                        id: 'toggle-btn', 
                        html : '',
                        title: 'Menu',
                        href : '#' } 
                        );
  	var nav_wrap = (<any>$)('nav#nav-wrap')
  	var nav = (<any>$)('ul#nav');  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on('click', function(e) {
   	e.preventDefault();
    	nav.slideToggle('fast');     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	(<any>$)(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	(<any>$)('ul#nav li a').on('click', function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});
  }

}

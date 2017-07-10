import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.siteHeader = $('.site-header');
		this.headerTrigger = $('.large-hero__subtitle');
		this.createHeaderWaypoint();
		this.pageSections = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createPageSectionWaypoints();
		this.addSmoothScroll();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScroll() {
		this.headerLinks.smoothScroll({
			speed: 1800
		});
	}

	createHeaderWaypoint() {
		let that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function() {
				that.siteHeader.toggleClass('site-header--dark');
			}
		});
	}

	createPageSectionWaypoints() {
		let that = this;
		this.pageSections.each(function() {
			let currentpagesection = this;

			new Waypoint({
				element: currentpagesection,
				handler: function(direction) {
					if (direction == "down") {
						let matchingHeaderLink = currentpagesection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: "25%"
			});

			new Waypoint({
				element: currentpagesection,
				handler: function(direction) {
					if (direction == "up") {
						let matchingHeaderLink = currentpagesection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
				},
				offset: "-25%"
			});
		});
	}
}

export default StickyHeader;
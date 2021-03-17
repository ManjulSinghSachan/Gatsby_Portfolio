import React, { Component } from 'react'
import styled from 'styled-components'

import "../components/contentNav.css"

class ContentNav extends Component {

    componentDidMount() {
        // Update the document title using the browser API
        this.section_items= Array.from(document.getElementsByClassName('section'));
        this.navigation_items= Array.from(document.getElementById('navigation').getElementsByTagName('a'));

        this.updateNavigation();

        window.addEventListener('scroll', this.updateNavigation);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateNavigation);
    }

    updateNavigation = () => {
        this.section_items.forEach( item => {
            var itemId = item.id;
			var activeSection = this.navigation_items.find(e => e.hash === '#'+itemId)
			if ( ( item.offsetTop - window.innerHeight/2 < window.scrollY ) && ( item.offsetTop + item.offsetHeight - window.innerHeight/2 > window.scrollY ) ) {
				activeSection.setAttribute('class', 'is-selected');
			}else {
				activeSection.removeAttribute('class', 'is-selected');
			}
		});
    }

    createLabels(item) {
        return(
            <li>
                <a href={"#"+item.id} data-number="1">
                    <span className="dot"></span>
                    <span className="label">{item.title}</span>
                </a>
            </li>
        )
      }

    render() {
        var listLabels = this.props.SubSections.map(this.createLabels);


        return (
        <nav id="navigation">
            <ul>
                {listLabels}
            </ul>
        </nav>
        );
    }
}

export default ContentNav;
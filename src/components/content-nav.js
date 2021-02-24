import React from 'react'
import styled from 'styled-components'

import "./content-nav-style.css"


export default function ContentNav() {
    return (
        <div class="box">
            <div class="progress">
                <div class="bar">
                    <div class="bar__fill" style="width: 33%;"></div>
                </div>
                <div class="point point--complete">
                    <div class="bullet"></div><label class="label">Select</label>
                </div>
                <div class="point point--active">
                    <div class="bullet"></div><label class="label">Review</label>
                </div>
                <div class="point">
                    <div class="bullet"></div><label class="label">Payment</label>
                </div>
                <div class="point">
                    <div class="bullet"></div><label class="label">Success </label>
                </div>
            </div>
        </div>
    )
}

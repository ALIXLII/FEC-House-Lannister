import styles from 'styled-components'

const Styles = styles.div `
.rating {
  display: grid;
  grid-template-columns: auto auto auto;
}

.ratingStar {
  padding-top: 15%;
  text-align: center;
}

.ratingPercent {
  padding-top: 10%;
  text-align: center;
}

.reviewInfo {
  display: grid;
}

.review {
  display: grid;
  grid-template-columns: 400px auto;
}

.checked {
  color: #A9A9A9;
}

.percent {
  font-size: 48px;
}

.user {
  display: grid;
  grid-template-columns: 40px auto;
}

.filterSortBar {
  float: right;
}

.checkMark {
  width: 1em;
  height: 1em;
  fill: #6be023;
}

.dropArrowSvg {
  width: 1em;
  height: 1em;
  fill: black;
}

.dropArrow {
  margin: 10px;
}

.filterSortVerticalBorder {
  border-left: 1px solid gray;
  height: 500px;
  margin-left: 15px;
  margin-right: 15px;
}

.filterVerticalBorder {
  border-left: 1px solid gray;
  height: 20px;
  margin-left: 0px;
  margin-right: 0px;
}

.filter:hover .dropArrowSvg {
  fill: gray;
}

.filter:hover {
  cursor: pointer;
  color: gray;
}

.sort:hover .dropArrowSvg {
  fill: gray;
}

.sort:hover {
  cursor: pointer;
  color: gray;
}

.eyeColor:hover .dropArrowSvg {
  fill: gray;
}

.eyeColor:hover {
  cursor: pointer;
  color: gray;
}

.hairColor:hover .dropArrowSvg {
  fill: gray;
}

.hairColor:hover {
  cursor: pointer;
  color: gray;
}

.skinTone:hover .dropArrowSvg {
  fill: gray;
}

.skinTone:hover {
  cursor: pointer;
  color: gray;
}

.skinType:hover .dropArrowSvg {
  fill: gray;
}

.skinType:hover {
  cursor: pointer;
  color: gray;
}

.userPicture {
  width: 35px;
  height: 35px;
}

#filterBar {
  display: none;
}

.filterTypes {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

#sortBar {
  display: grid;
  float: right;
  margin-top: 5px;
  margin-right: 10px;
  position: relative;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#eyeColorOptions {
  color: black;
  display: grid;
  margin-top: 5px;
  margin-right: 10px;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#hairColorOptions {
  color: black;
  display: grid;
  margin-top: 5px;
  margin-right: 10px;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#skinToneOptions {
  color: black;
  display: grid;
  margin-top: 5px;
  margin-right: 10px;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#skinTypeOptions {
  color: black;
  display: grid;
  margin-top: 5px;
  margin-right: 10px;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.topDivider {
  display: block;
  margin-bottom: 16px;
  margin-top: 32px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #A9A9A9;
}

.divider {
  display: block;
  margin-bottom: 16px;
  margin-top: 16px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #A9A9A9;
}

div {
  font-family: Helvetica;
  font-weight: lighter;
  font-size: 12pt;
}

.header {
  font-size: 24px;
  text-align: center;
  font-family: georgia, times, serif;
  font-weight: lighter;
}

/* Three column layout */
.side {
  float: left;
  width: 15%;
  margin-top: 10px;
}

.middle {
  float: left;
  width: 70%;
  margin-top: 10px;
}

/* Place text to the right */
.right {
  text-align: justify;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The bar container */
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: left;
  color: white;
}

/* Individual bars */
.bar-5 {
  width: 60%;
  height: 18px;
  background-color: black;
}

.bar-4 {
  width: 30%;
  height: 18px;
  background-color: black;
}

.bar-3 {
  width: 10%;
  height: 18px;
  background-color: black;
}

.bar-2 {
  width: 4%;
  height: 18px;
  background-color: black;
}

.bar-1 {
  width: 15%;
  height: 18px;
  background-color: black;
}

/* Responsive layout - make the columns stack on top of each other instead of next to each other */
@media (max-width: 400px) {
  .side, .middle {
    width: 100%;
  }

  /* Hide the right column on small screens */
  .right {
    display: none;
  }
}
`
export default Styles;
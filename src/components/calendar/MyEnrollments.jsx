import React from "react";
import ArrowHoverCal from "../../assets/images/arrowhovercal.png"

const MyEnrollmentCalendar = () => {
  return (
    <div class="body">
      <div class="row">
        <div class="boxofcalendar">
          <div class="calendar">
            <div class="elementbox">
              <div class="boxwidth">
                <p>MON</p>
              </div>
              <div class="boxwidth">
                <p>TUE</p>
              </div>
              <div class="boxwidth">
                <p>WED</p>
              </div>
              <div class="boxwidth">
                <p>THU</p>
              </div>
              <div class="boxwidth">
                <p>FRI</p>
              </div>
              <div class="boxwidth">
                <p>SAT</p>
              </div>
              <div class="boxwidth">
                <p>SUN</p>
              </div>

              <div class="nom">
                <div class="boxwidthcal">
                  <p>1</p>
                </div>
                <div class="lineinc from1to5 firstline blueline">
                  <p>Sarah Johnson is on vacation</p>
                </div>
                <div class="boxwidthcal">
                  <p>2</p>
                </div>
                <div class="boxwidthcal">
                  <p>3</p>
                </div>
                <div class="boxwidthcal">
                  <p>4</p>
                </div>
                <div class="boxwidthcal">
                  <p>5</p>
                </div>
                <div class="boxwidthcal">
                  <p>6</p>
                </div>
                <div class="boxwidthcal">
                  <p>7</p>
                </div>
              </div>
              <div class="nom">
                <div class="boxwidthcal">
                  <p>8</p>
                </div>
                <div class="boxwidthcal">
                  <p>9</p>
                </div>
                <div class="boxwidthcal">
                  <p>10</p>
                </div>
                <div class="boxwidthcal">
                  <p>11</p>
                </div>
                <div class="boxwidthcal">
                  <p>12</p>
                </div>
                <div class="boxwidthcal activeno">
                  <p>13</p>
                  <div class="greenactivebgofno" />
                </div>
                <div class="boxwidthcal">
                  <p>14</p>
                </div>
              </div>
              <div class="nom">
                <div class="lineinc from4to7 line3 orangeline">
                  <p>Chuck will be absent</p>
                </div>
                <div class="boxwidthcal">
                  <p>15</p>
                </div>
                <div class="boxwidthcal activeno">
                  <div class="orangeactivebgofno" />
                  <p>16</p>
                </div>
                <div class="boxwidthcal">
                  <p>17</p>
                </div>
                <div class="boxwidthcal">
                  <p>18</p>
                </div>
                <div class="boxwidthcal">
                  <p>19</p>
                </div>
                <div class="boxwidthcal">
                  <p>20</p>
                </div>
                <div class="boxwidthcal">
                  <p>21</p>
                </div>
              </div>
              <div class="nom">
                <div class="lineinc from3to4 line4 greenline">
                  <div class="divfortext">
                    <p>Melody will be picked up by dad </p>
                  </div>

                  <div class="hoverline">
                    <img src={ArrowHoverCal} alt="" />
                    <div class="header">
                      <h1>Chuck will be absent</h1>
                      <p>July 19 All Day - July 21 All Day </p>
                      <a href="#" class="colour">
                        Colour <div class="coln" />
                      </a>
                    </div>
                    <div class="bodyh">
                      <h2>CHILD</h2>
                      <p>Chuck Stevens</p>
                      <h2>TYPE</h2>
                      <p>Attendance</p>
                      <h2>NOTES</h2>
                      <p>
                        Chuck is going to be away on a family trip. He will
                        return for a half day on the 21st.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="boxwidthcal">
                  <p>22</p>
                </div>
                <div class="boxwidthcal">
                  <p>23</p>
                </div>
                <div class="boxwidthcal">
                  <p>24</p>
                </div>
                <div class="boxwidthcal">
                  <p>25</p>
                </div>
                <div class="boxwidthcal">
                  <p>26</p>
                </div>
                <div class="boxwidthcal">
                  <p>27</p>
                </div>
                <div class="boxwidthcal">
                  <p>28</p>
                </div>
              </div>
              <div class="nom">
                <div class="boxwidthcal">
                  <p>29</p>
                </div>
                <div class="boxwidthcal">
                  <p>30</p>
                </div>
                <div class="boxwidthcal">
                  <p>31</p>
                </div>
                <div class="boxwidthcal">
                  <p class="newmon">1</p>
                </div>
                <div class="boxwidthcal">
                  <p class="newmon">2</p>
                </div>
                <div class="boxwidthcal">
                  <p class="newmon">3</p>
                </div>
                <div class="boxwidthcal">
                  <p class="newmon">4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollmentCalendar;

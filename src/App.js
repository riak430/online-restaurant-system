import React from "react";
import Menubar from "./components/menus";
import Ner from "./components/ner/ner";
import Orts from "./components/Our specials/specials";
import Image from "./components/zurag/zurag";
import "./App.css";
import Vne from "./components/vne/vne";

function App() {
  return (
    <div className="App">
      <div className="ap">
        <Menubar />
      </div>

      <div className="our">
        <h1>Our Specials</h1>
        <div className="zuraas"></div>
      </div>
      <div className="hool-box">
        <div className="box">
          <div className="bo">
            <Ner ner="Lorem ipsum dolor" />
            <Image src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?cs=srgb&dl=pexels-terje-sollie-299348.jpg&fm=jpg" />
            <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan. " />
          </div>
          <div className="bo">
            <Ner ner="Lorem ipsum dolor" />
            <Image src="https://images.pexels.com/photos/765082/pexels-photo-765082.jpeg?cs=srgb&dl=pexels-yigithan-bal-765082.jpg&fm=jpg" />
            <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan. " />
          </div>
          <div className="bo">
            <Ner ner="Lorem ipsum dolor" />
            <Image src="https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg?cs=srgb&dl=pexels-valeria-boltneva-7474372.jpg&fm=jpg" />
            <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante lacus, laoreet a condimentum vel, volutpat at tellus. Nullam id bibendum justo. Aliquam vulputate velit sed est fringilla, nec congue urna accumsan. " />
          </div>
        </div>
      </div>

      <div className="story">
        <div className="zurag">
          <Image src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="text">
          <h1>Our Story</h1>
          <div className="zuraas"></div>
          <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh." />
          <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare." />
        </div>
      </div>

      <div className="menu">
        <h1>Menu</h1>
        <div className="arrow"></div>
        <div className="menu-box">
          <div className="breakfast">
            <h2>Breakfast & Starters</h2>
            <div className="arrow"></div>
            <div className="p">
              <h3>Tortellini Skewers</h3>
              <Vne vne="$9" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Fried Ravioli</h3>
              <Vne vne="$7" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Wild Mushroom Arancini</h3>
              <Vne vne="$9" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Mozzarella Sticks</h3>
              <Vne vne="$10" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
          </div>
          <div className="main">
            <h2>Breakfast & Starters</h2>
            <div className="arrow"></div>
            <div className="p">
              <h3>Roast Stuffed Chicken</h3>
              <Vne vne="$18" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Chicken & Mushroom Pasta</h3>
              <Vne vne="$20" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Beef Lasagne</h3>
              <Vne vne="$14" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Chicken Goujons</h3>
              <Vne vne="$19" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
          </div>

          <div className="dinner">
            <h2>Dinner</h2>
            <div className="arrow"></div>
            <div className="p">
              <h3>Sesame-Ginger Beef</h3>
              <Vne vne="$15" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Crispy Fried Chicken</h3>
              <Vne vne="$17" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Mongolian Shrimp & Broccoli</h3>
              <Vne vne="$18" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Spicy Coconut Salmon</h3>
              <Vne vne="$20" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
          </div>

          <div className="desert">
            <h2>Dessert</h2>
            <div className="arrow"></div>
            <div className="p">
              <h3>Chocolate Mud Cake</h3>
              <Vne vne="$11" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Bourbon-Pecan Tart</h3>
              <Vne vne="$14" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Texas Sheert Cake</h3>
              <Vne vne="$15" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
            <div className="p">
              <h3>Vanilla Cheesecake</h3>
              <Vne vne="$15" />
            </div>
            <div className="p2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                seddapibus leo nec ornare diam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="egneeZurag">
        <div className="zuragnuud">
          <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?cs=srgb&dl=pexels-jonathan-borba-2983101.jpg&fm=jpg"/>
          <img src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?cs=srgb&dl=pexels-nerfee-mirandilla-3186654.jpg&fm=jpg"/>
          <img src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?cs=srgb&dl=pexels-christel-jensen-628776.jpg&fm=jpg"/>
          <img src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?cs=srgb&dl=pexels-ella-olsson-3026808.jpg&fm=jpg"/>
        </div>
      </div>

      <div className="story">
        <div className="text">
          <h1>Meet Our Chef</h1>
          <div className="zuraas"></div>
          <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh." />
          <Orts orts="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare." />
        </div>
        <div className="zurag">
          <Image src="https://images.pexels.com/photos/4253297/pexels-photo-4253297.jpeg?cs=srgb&dl=pexels-cottonbro-4253297.jpg&fm=jpg" />
        </div>
      </div>

      <div className="footer">
        <div className="footer1">
          <div className="boxx">
            <div className="reservations">
              <h2>RESERVATIONS</h2>
              <div className="arrow"></div>
              <p>Please call</p>
              <p>(887) 654-3210</p>
            </div>
          </div>
          <div className="boxx">
            <div className="address">
              <h2>Address</h2>
              <div className="arrow"></div>
              <p>4321 California St,</p>
              <p>San Francisco, CA 12345</p>
            </div>
          </div>
          <div className="boxx">
            <div className="hours">
              <h2>Opening Hours</h2>
              <div className="arrow"></div>
              <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
              <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div className="input">
            <h2>Send Us a Message</h2>
            <input type="text" className="name form-control" placeholder="Name"></input>
            <input type="text" className="mail form-control" placeholder="E-mail"></input>
            <textarea className="message" placeholder="Message"></textarea>
            <button className="messagebtn">Send Message</button>
          </div>
        </div>
        <div className="footer3">
          <div className="copyrigth">
            <p>Copyright. All rights reserved | Designed by TemplateWire</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

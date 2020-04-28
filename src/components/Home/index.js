import React, { Component } from 'react';
import criminal from '../../../public/assets/ic_criminallaw.png';
import property from '../../../public/assets/ic_property.png';
import torts from '../../../public/assets/ic_torts.png';
import contracts from '../../../public/assets/ic_contract.png';
import money from '../../../public/assets/ic_moneylanduring.jpg';
import proffesional from '../../../public/assets/ic_professional.png';
import law from '../../../public/assets/ic_eulaw.jpg';
import england from '../../../public/assets/ic_england.png';
import Cookies from 'js-cookie'


export default class Home extends Component {

    constructor(props) {
        super(props);
        Cookies.get('authorize')==null ? this.props.history.push('/') : this.props.history.push('/home');
    }

    routeChange=(e)=> {
        let path = `/category/`+e.currentTarget.dataset.id;
        this.props.history.push(path);
      }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div  onClick={this.routeChange}   data-id="property-law" className="exam">
                            <img src={property} height="100%" className={'opacity-img'}/>
                            <span>Property Law</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div  onClick={this.routeChange} data-id="criminal-law" className="exam">
                            <img src={criminal} height="100%" className={'opacity-img'}/>
                            <span>Criminal Law</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div onClick={this.routeChange}   data-id="torts" className="exam">
                            <img src={torts} height="100%" className={'opacity-img'}/>
                             <span>Torts</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div onClick={this.routeChange}  data-id="contract" className="exam">
                            <img src={contracts} height="100%" className={'opacity-img'}/>
                            <span>Contract</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div onClick={this.routeChange}   data-id="money-launderting-taxation" className="exam">
                            <img src={money} height="100%" className={'opacity-img'}/>
                            <span>Money Laundering and Taxation</span></div>
                    </div>
                    <div className="col-md-3">
                        <div onClick={this.routeChange}   data-id="proffesional-conduct-and-accounts" className="exam">
                            <img src={proffesional} height="100%" className={'opacity-img'}/>
                            <span>Professional Conduct and Accounts</span></div>
                    </div>
                    <div className="col-md-3">
                        <div onClick={this.routeChange}   data-id="law-of-the-eu" className="exam">
                            <img src={law} height="100%" className={'opacity-img'}/>
                            <span>Law of the EU</span></div>
                    </div>
                    <div className="col-md-3">
                        <div onClick={this.routeChange}  data-id="england-legal-system" className="exam">
                        <img src={england} height="100%" className={'opacity-img left-margin'}/>
                            <span className="short">England Legal System, Constitutional Law and Human Rights</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

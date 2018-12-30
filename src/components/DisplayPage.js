import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPage from './EditPage';
import LoadingPage from './LoadingPage';
import firebase from '../datamodel/datastore';
import './DisplayPage.css';

class AllPosts extends Component {

    handleDelete = (post) => {
        this.props.dispatch({ type: 'DELETE', id: post.id });
        // eslint-disable-next-line
        const ref = firebase.database().ref('users/' + post.key).ref.remove();
    }

    render() {
        console.log(this.props.posts)
        return (




            <div className="ui internally celled grid">
            <div className="row">

            <div className="three wide column">
            <div className="ui card">
            <a className="image" href="/">
            <img src="https://i.imgur.com/RxckqDH.png" alt="cap" />
            </a>
            <div className="content">
            <a className="header" href="/">Trending</a>
            <div className="meta">
            <a>popular now </a>
            </div>
            </div>
            </div>


            <a className="ui card" href="https://www.facebook.com/mawlamyinetustudentsunion/">
            <div className="content">
            <div className="header">Mawlamyine Technological University Student Union</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/38404871_2196443047253425_7229502592890437632_n.jpg?_nc_cat=100&_nc_ht=scontent.frgn3-1.fna&oh=47af98432241730098684969dc8de771&oe=5C904B52" /> 
            </div>
            </div>
            </a>

            <a className="ui card" href="https://www.facebook.com/TU-Mawlamyine-Readers-Digest-182857208986721/">
            <div className="content">
            <div className="header">TU-Mawlamyine Reader Digest</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/27540574_182858902319885_5931013821976084405_n.jpg?_nc_cat=103&_nc_ht=scontent.frgn3-1.fna&oh=e14eab1715823429d6a17010aa1d83f0&oe=5C922D82" />
            </div>
            </div>
            </a>

            
            <a className="ui card" href="https://www.facebook.com/tumlmenvironmentclub/">
            <div className="content">
            <div className="header">Mawlamyine Technological University Environmental Club</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/34674481_584650328595105_8049947303269629952_n.jpg?_nc_cat=109&_nc_ht=scontent.frgn3-1.fna&oh=73bab11407e06348fb9dd2b29e9867ac&oe=5C9B3762" /> 
            </div>
            </div>
            </a>

            <a className="ui card" href="https://www.facebook.com/tumlmserc/">
            <div className="content">
            <div className="header">Engineering Students Research Club - ESRC</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/16105514_742515212573030_2367259815977790239_n.jpg?_nc_cat=111&_nc_ht=scontent.frgn3-1.fna&oh=4c2c8e1d8589afba9b3a52ec32f847c9&oe=5CD5FD96" />
            </div>
            </div>
            </a>







            <a className="ui card" href="https://www.facebook.com/SFCDTUMLM/">
            <div className="content">
            <div className="header">TU MLM Fair & Career Developement</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/48365673_345437649521381_3377055484023406592_n.jpg?_nc_cat=101&_nc_ht=scontent.frgn3-1.fna&oh=6296290fb475a675b32bcd4b347f60f0&oe=5CA0F49A" /> 
            </div>
            </div>
            </a>







            <a className="ui card" href="https://www.facebook.com/TU-mlm-%E1%80%97%E1%80%AF%E1%80%92%E1%81%B6%E1%80%98%E1%80%AC%E1%80%9E%E1%80%AC%E1%80%A1%E1%80%9E%E1%80%84%E1%80%B9%E1%80%B8-324499481074730/">
            <div className="content">
            <div className="header">TU mlm ဗုဒၶဘာသာအသင္း</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/10984076_397053673819310_8536851580180758325_n.jpg?_nc_cat=107&_nc_ht=scontent.frgn3-1.fna&oh=a7993ddd2d3e2048289b6638c91591a9&oe=5C9B3594" />
            </div>
            </div>
            </a>










            </div>
            <div className="ten wide column">
            {this.props.loading ? <LoadingPage /> : null}
            {this.props.posts.map((post) => (


                <div key={post.id} className="card text-white bg-success">
                {post.editing ? <EditPage key={post.id} post={post} /> :
                (

                    <div className="ui info segment">
                    <div className="card">
                    <div className="content">
                    <div className="ui blue header">{post.title}</div>
                    </div>
                    <div class="ui hidden divider">
                    
                    </div>
                    <div className="content">
                    <h4 className="ui sub header"> {post.gettime}</h4>
                    <div className="ui small feed">
                    <div className="event">
                    <div className="content">
                    <div className="summary">
                    <h5>&nbsp;&nbsp; {post.message}</h5>
                    </div>
                    </div>
                    </div>
                    <div className="event">
                    <div className="content">
                    <div className="summary">
                    <a style={{color:'#ff3f34', fontWeight:'bold'}}>{post.hashsay}</a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="ui hidden divider"></div>
                    <div className="extra content">

                    {firebase.auth().currentUser.uid === post.uid ? <button className="ui basic red button" onClick={() => this.handleDelete(post)}><i className="trash icon"></i> delete</button> : null}
                    {firebase.auth().currentUser.uid === post.uid ? <button className="ui basic green button" onClick={() => this.props.dispatch({ type: 'EDIT', id: post.id })}><i className="pencil alternate icon"></i> update </button> : null}
                    </div>
                    </div>
                    <h4 className="ui green horizontal divider">
                    {post.getdate}
                    </h4>
                    </div>

                    )
                }

                </div>
                ))}
            </div>
            <div className="three wide column">

            
            <div className="ui card">
            <a className="image" href="/">
            <img src="https://www.registerforshare.org/images/shareLogo.png" alt="cap" />
            </a>
            <div className="content">
            <a className="item">
            <i className="icon mail"></i> Messages
            <div className="floating ui red label">68</div>
            </a>
            <div className="meta">
            <a>Updated Data</a>
            </div>
            </div>
            </div>

            
            <div className="ui card">
            <a className="image" href="/">
            <img src="https://www.mycreditunion.gov/sites/default/page-content/infographic/images/members/full-crowd.png" alt="cap" />
            </a>
            <div className="content">
            <a className="item">
            <i className="icon users"></i> Members
            <div className="floating ui red label">46</div>
            </a>
            <div className="meta">
            <a>Updated Data</a>
            </div>
            </div>
            </div>











            <a className="ui card" href="https://www.facebook.com/mawlamyinetugym/">
            <div className="content">
            <div className="header">Mawlamyine Technological University GYM & Fitness Center</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/47099230_285920922060253_8370924421346492416_n.jpg?_nc_cat=104&_nc_ht=scontent.frgn3-1.fna&oh=789dd07da0564c9173539b71943d6bdb&oe=5C993F41" /> 
            </div>
            </div>
            </a>








            <a className="ui card" href="https://www.facebook.com/MLMTUMHC/">
            <div className="content">
            <div className="header">Mawlamyine Technological University Mountaineering And Hiking Club</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/36320123_628655600828249_1780019474653511680_n.png?_nc_cat=109&_nc_ht=scontent.frgn3-1.fna&oh=eb7e12ebedf9b1ed0c66134411330053&oe=5CD47D73" />
            </div>
            </div>
            </a>




            <a className="ui card" href="https://www.facebook.com/TU-MLM-Music-Club-697110900635928/">
            <div className="content">
            <div className="header">Mawlamyine Technological University Music Club</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/38188510_699240687089616_6231511098500055040_n.jpg?_nc_cat=109&_nc_ht=scontent.frgn3-1.fna&oh=eeb5b29f0c4b6c2234f97f404c3ea7af&oe=5CCDDC00" />
            </div>
            </div>
            </a>








            <a className="ui card" href="https://www.facebook.com/Vizza0987/photos/a.282095785636546/284780388701419/">
            <div className="content">
            <div className="header">TU MLM Mailbox</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/22552633_284780388701419_4517204047884881990_n.jpg?_nc_cat=109&_nc_ht=scontent.frgn3-1.fna&oh=b4e98ec9ec97cd8df12d1aeacac5dd60&oe=5C8B3C34" />
            </div>
            </div>
            </a>







            <a className="ui card" href="https://www.facebook.com/studentsenglishlanguageclub/">
            <div className="content">
            <div className="header">Students English Language CLub -SELC</div>
            <div className="meta">
            <span className="category">trending</span>
            </div>
            <div className="description">
            <p> A group to inform Technological University student with updated information </p>
            </div>
            </div>
            <div className="extra content">
            <div className="right floated author">
            <img className="ui avatar image" alt="haha" src="https://scontent.frgn3-1.fna.fbcdn.net/v/t1.0-9/16003059_138681889965181_5417449517858050738_n.jpg?_nc_cat=101&_nc_ht=scontent.frgn3-1.fna&oh=950d34e78d24b6702f76c5475e5d59d5&oe=5C9FFB51" /> 
            </div>
            </div>
            </a>






            </div>
            </div>

            </div>







            );
}
}


const mapStateToProps = (state) => ({
    loading: state.loading
})
export default connect(mapStateToProps)(AllPosts);

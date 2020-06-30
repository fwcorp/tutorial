import React, { Component } from 'react'
import './Dropzone.css';

export class Dropzone extends Component {
    constructor(props) {
        super(props)

        this.state = {
            highlight: false
        }

        this.fileInputRef = React.createRef();

        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);

        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);

        this.onMouseOver = this.onMouseOver.bind(this);
    }

    openFileDialog() {
        if (this.props.disabled)
            return;
        this.fileInputRef.current.click();
    }

    onFilesAdded(e) {
        if (this.props.disabled)
            return;
        const files = e.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onDragOver(e) {
        e.preventDefault();
        if (this.props.disabled)
            return;

        this.setState({ highlight: true });
    }

    onDragLeave() {
        this.setState({ highlight: false });
    }

    onDrop(e) {
        e.preventDefault();
        if (this.props.disabled)
            return;
        const files = e.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ highlight: false });
    }

    onMouseOver() {
        document.getElementById("instructions").style.color = "blue";
    }

    // 

    render() {
        return (
            <div className={`Dropzone ${this.state.highlight ? "Highlight" : ""}`} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop} onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
                <img alt="upload" className="Icon" src="./cloud.png" />
                <input ref={this.fileInputRef} className="FileInput" type="file" multiple onChange={this.onFilesAdded} />
                <span id="instructions" onMouseOver={this.onMouseOver}>Upload Files</span>
            </div>
        )
    }
}

export default Dropzone

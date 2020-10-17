state = {
  project: {
    name: "",
  },
};

handleChange = (event) => {
  const project = { ...this.state.project, name: event.target.value };
  this.setState({ project });
};

handleSubmit = (event) => {
  event.preventDefault();
  this.props.createProject(this.state.project);
};

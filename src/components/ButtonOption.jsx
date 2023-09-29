function ButtonOptions() {
    return (
      <>
      <div class="btn-group btn-group-toggle btn-group-md" data-toggle="buttons">
        <label class="btn btn-danger">
          <input type="radio" name="options" id="option1" autocomplete="off" /> None
        </label>
        <label class="btn btn-primary">
          <input type="radio" name="options" id="option2" autocomplete="off"/> Half
        </label>
        <label class="btn btn-success">
          <input type="radio" name="options" id="option3" autocomplete="off"/> Full
        </label>
        </div>
      </>
    );
  }

  export default ButtonOptions;
import React from "react";

function Upload() {
  return (
    <div>
      <form
        action="http://localhost:8000/sneakers/upload"
        enctype="multipart/form-data"
        method="post"
      >
        <div class="form-group">
          <input type="file" class="form-control-file" name="sneaker" />
          <input type="submit" value="Upload Sneaker" />
        </div>
      </form>
    </div>
  );
}

export default Upload;

export default loremForm;
const loremForm = () => `
<section class="section border rounded-3">
   <form role="form" id="form1">
      <div class="grid-row-1">
         <label for="p_count">How Many Fucking
            Paragraphs?</label>
         <div class="">
            <input type="number" class="form-control" id="p_count" placeholder="How Many Fucking Paragraphs?" min="1" max="12" name="p_count" value="1" data-pg-name="Count">
            </div>
         </div>

         <div class="grid-row-1">
            <label for="h_tag">Want a Motherfucking Header tag?</label>
            <select id="h_tag" aria-label="Default select example" name="h_tag"
               data-pg-name="Heading">
               <option selected>none</option>
               <option value="h1">h1</option>
               <option value="h2">h2</option>
               <option value="h3">h3</option>
               <option value="h4">h4</option>
               <option value="h5">h5</option>
               <option value="h6">h6</option>
            </select>
         </div>
         <div class="mb-3">
         </div>
         <label class="grid-row-2" for="p_tag" data-pg-name="Checkbox">
            <input type="checkbox" class="form-check-input" id="p_tag" name="p_tag" data-pg-name="P Tag">
               <span class="form-check-label" for="p_tag">Add Some Fucking Bitchass <code>&lt;p&gt;</code>
                  Tags.</span>
            </label>
            <label class="grid-row-2" for="img_tag" data-pg-name="Checkbox">
               <input type="checkbox" class="form-check-input me-4" id="img_tag" name="img_tag" data-pg-name="Img Tag">
                  <span class="form-check-label" for="img_tag">Add a Fucking <code>&lt;img&gt;</code> Tag.</span>
               </label>
               <label class="grid-row-2" for="wrap_tag" data-pg-name="Checkbox">
                <input type="checkbox" class="form-check-input me-4" id="wrap_tag" name="wrap_tag" data-pg-name="Wrapp Tag">
                    <span class="form-check-label" for="img_tag">Wrapp That Shit with a <code>&lt;div&gt;</code> Tag.</span>
                </label>
               <div class="mb-3">
               </div>
               <button type="submit" class="submit">Generate it Bitch</button>
               <button class="copy">Copy Code</button>
               <button type="reset" class="muted-button reset">Clean That Shit</button>
            </form>
            <div class="mb-3"></div>
            <div class="mb-3">
               <label for="out1">Copy The Motherfucking Code Below and Paste it Where the Fucking you want.</label>
               <textarea class="form-control" id="out1" rows="3" onfocus="this.select()"></textarea>
            </div>
         </section>
         <section class="section" id="out2"></section>`;

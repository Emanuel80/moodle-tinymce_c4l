<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * TinyMCE - Components for Learning functions file.
 *
 * @package    tinymce_c4l
 * @copyright  2022 Roger Segú and Emanuel Bechis {@link https://rogersegu.me}
 * @author     Roger Segú and Emanuel Bechis{@link https://rogersegu.me}
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define('NO_MOODLE_COOKIES', true); // Session not used here.
require(dirname(dirname(dirname(dirname(dirname(dirname(__FILE__)))))) . '/config.php');
$PAGE->set_context(context_system::instance());
$PAGE->set_url('/lib/editor/tinymce/plugins/c4l/c4lpage.php');
$stringmanager = get_string_manager();
$editor = get_texteditor('tinymce');
$plugin = $editor->get_plugin('c4l');
$htmllang = get_html_lang();
header('Content-Type: text/html; charset=utf-8');
header('X-UA-Compatible: IE=edge');
?>
<!DOCTYPE html>
<html <?php echo $htmllang ?>
<head>
    <title><?php print_string('dialogtitle', 'tinymce_c4l'); ?></title>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/tiny_mce_popup.js"></script>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/mctabs.js"></script>
	<script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/form_utils.js"></script>
	<script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/validate.js"></script>
    <script type="text/javascript" src="tinymce/js/advlink.min.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>


  <div class="c4l-buttons-grid">
    <div class="c4l-dialog-button c4l-keyconcept-icon" onclick="insertAction('c4l-keyconcept');return false;">
        <span>Key concept</span>
    </div>
    <div class="c4l-dialog-button c4l-tip-icon" onclick="insertAction('c4l-tip');return false;">
        <span>Tip</span>
    </div>
    <div class="c4l-dialog-button c4l-reminder-icon" onclick="insertAction('c4l-reminder');return false;">
        <span>Reminder</span>
    </div>
    <div class="c4l-dialog-button c4l-attention-icon" onclick="insertAction('c4l-attention');return false;">
        <span>Attention</span>
    </div>
    <div class="c4l-dialog-button c4l-quote-icon" onclick="insertAction('c4l-quote','quote');return false;">
        <span>Quote</span>
    </div>
    <div class="c4l-dialog-button c4l-dodontcards-icon" onclick="insertAction('c4l-dodontcards','cards');return false;">
        <span>Do/don't cards</span>
    </div>
    <div class="c4l-dialog-button c4l-readingcontext-icon" onclick="insertAction('c4l-readingcontext','reading');return false;">
        <span>Reading context</span>
    </div>
    <div class="c4l-dialog-button c4l-example-icon" onclick="insertAction('c4l-example','example');return false;">
        <span>Example</span>
    </div>
    <div class="c4l-dialog-button c4l-figure-icon" onclick="insertAction('c4l-figure','figure');return false;">
        <span>Figure</span>
    </div>
    <div class="c4l-dialog-button c4l-tag-icon" onclick="insertAction('c4l-tag');return false;">
        <span>Tag</span>
    </div>
    <div class="c4l-dialog-button c4l-estimatedtime-icon" onclick="insertAction('c4l-estimatedtime','right');return false;">
        <span>Estimated time</span>
    </div>
    <div class="c4l-dialog-button c4l-duedate-icon" onclick="insertAction('c4l-duedate','right');return false;">
        <span>Due date</span>
    </div>
    <div class="c4l-dialog-button c4l-proceduralcontext-icon" onclick="insertAction('c4l-proceduralcontext');return false;">
        <span>Procedural context</span>
    </div>
    <div class="c4l-dialog-button c4l-gradingvalue-icon" onclick="insertAction('c4l-gradingvalue','right');return false;">
        <span>Grading value</span>
    </div>
    <div class="c4l-dialog-button c4l-expectedfeedback-icon" onclick="insertAction('c4l-expectedfeedback');return false;">
        <span>Expected feedback</span>
    </div>
    <div class="c4l-dialog-button c4l-allpurposecard-icon" onclick="insertAction('c4l-allpurposecard');return false;">
        <span>All-purpose card</span>
    </div>
    <div class="c4l-dialog-button c4l-inlinetag-icon" onclick="insertAction('c4l-inlinetag');return false;">
        <span>Inline tag</span>
    </div>
  </div>

</body>
</html>

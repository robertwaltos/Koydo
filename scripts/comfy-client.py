import websocket
import uuid
import json
import urllib.request
import urllib.parse
import os

# Koydo Neural Cinema - ComfyUI Client
# This script sends prompts to a running ComfyUI instance (http://localhost:8188)

SERVER_ADDRESS = "127.0.0.1:8188"
CLIENT_ID = str(uuid.uuid4())

def queue_prompt(prompt):
    p = {"prompt": prompt, "client_id": CLIENT_ID}
    data = json.dumps(p).encode('utf-8')
    req = urllib.request.Request("http://{}/prompt".format(SERVER_ADDRESS), data=data)
    return json.loads(urllib.request.urlopen(req).read())

def get_image(filename, subfolder, folder_type):
    data = {"filename": filename, "subfolder": subfolder, "type": folder_type}
    url_values = urllib.parse.urlencode(data)
    with urllib.request.urlopen("http://{}/view?{}".format(SERVER_ADDRESS, url_values)) as response:
        return response.read()

def get_history(prompt_id):
    with urllib.request.urlopen("http://{}/history/{}".format(SERVER_ADDRESS, prompt_id)) as response:
        return json.loads(response.read())

def generate_image_from_text(prompt_text, workflow_path="GROK_Prompts/GROK_Media/ComfyUI_Flux_Workflow.json"):
    
    if not os.path.exists(workflow_path):
        print(f"Error: Workflow file not found at {workflow_path}")
        return

    print(f"Loading workflow: {workflow_path}")
    with open(workflow_path, "r", encoding="utf-8") as f:
        workflow = json.load(f)

    # Simple Node Replacer - UPDATE THIS based on your specific ID mapping in the JSON file
    # In my created JSON: 
    # Node 1 = Positive Prompt (TEXT input)
    # Node 2 = Negative Prompt (TEXT input)
    # Node 3 = KSampler (Seed)
    
    # Update Positive Prompt
    if "1" in workflow and "inputs" in workflow["1"]:
        # Find the text widget index or key. In API format it's usually "widgets_values" or inputs
        # ComfyUI API format uses "inputs", strictly. The JSON I saved is web-format (UI), 
        # API format is slightly different.
        # Converting UI Format -> API Format usually requires running it once in UI and "Save (API Format)"
        
        # NOTE: For now, this is a placeholder. The user needs to:
        # 1. Open ComfyUI
        # 2. Load the JSON
        # 3. Enable "Dev Mode" in settings
        # 4. Click "Save (API Format)" to get the true API json.
        pass

    print("⚠️  To fully automate this, you must saves the workflow in 'API Format' from ComfyUI settings.")
    print(f"Sending prompt: '{prompt_text[:50]}...'")
    
    # This is a mock until we have the API JSON format
    # prompt_id = queue_prompt(workflow)['prompt_id']
    # print(f"Queued with ID: {prompt_id}")

if __name__ == "__main__":
    generate_image_from_text("A futuristic tree city with glowing bio-luminescent leaves, cinematic")

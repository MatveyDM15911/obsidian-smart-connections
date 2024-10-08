export function default_settings() {
  return {
    settings: {
      new_user: true,
      chat_folder: "smart chat",
      smart_sources_embed_model: "TaylorAI/bge-micro-v2",
      smart_blocks_embed_model: "None",
      smart_connections_folder: ".smart-env",
      smart_connections_folder_last: ".smart-env",
      system_prompts_folder: "smart prompts",
      smart_chat_folder: "smart-chats",
      smart_chat_folder_last: "smart-chats",
      local_embedding_max_tokens: 2048,
      embedding_file_per_note: false,
      chat_model_platform_key: "open_router",
      open_router: {},
      // Smart Blocks Settings (chunking)
      embed_input_min_chars: 100,
      multi_heading_blocks: true,
      // v2.2
      enable_mobile: false,
      actions: {
        "lookup": true
      },
      // V1
      api_key: "",
      excluded_headings: "",
      file_exclusions: "Untitled",
      folder_exclusions: "smart-chats",
      show_full_path: false,
      expanded_view: true,
      language: "en",
      log_render: false,
      log_render_files: false,
      recently_sent_retry_notice: false,
      version: "",
    },
    embeddings_loaded: false,
    folders: [],
    has_new_embeddings: false,
    render_log: {
      deleted_embeddings: 0,
      exclusions_logs: {},
      failed_embeddings: [],
      files: [],
      new_embeddings: 0,
      skipped_low_delta: {},
      token_usage: 0,
      tokens_saved_by_cache: 0,
    },
    retry_notice_timeout: null,
    sc_branding: {},
    update_available: false,
  };
}
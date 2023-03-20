export default {
  common: {
    delete: '削除',
    save: '保存する',
    reset: 'リセット',
    yes: 'はい',
    no: 'いいえ',
    noData: 'データなし',
    wrong: '問題が発生しました。後でもう一度試してください。',
    success: '成功しました',
    failed: '失敗しました',
    about_head: '作成者はChanzhaoyuで、編集者はWenJingです。ライセンスはMITです。',
    about_body: 'もしプロジェクトが役に立った場合は、Githubでスターをつけていただくか、元の作者に寄付をご検討いただけると幸いです。',
  },
  chat: {
    newChat: '新しい会話',
    placeholder: '何でも聞いてください...（Shift + Enter = 改行）',
    placeholderMobile: '何でも聞いてください...',
    copy: 'コピー',
    copied: 'コピー済み',
    copyCode: 'コードをコピー',
    clearChat: 'チャットをクリア',
    clearChatConfirm: 'このチャットをクリアしてもよろしいですか？',
    deleteMessage: 'メッセージを削除',
    deleteMessageConfirm: 'このメッセージを削除してもよろしいですか？',
    deleteHistoryConfirm: 'この履歴をクリアしてもよろしいですか？',
    clickToTalk: 'クリックして録音開始',
    clickToSend: '送信',
    recordingInProgress: '[録音中...]',
    openMicrophoneFailedTitle: 'マイクのオープンに失敗しました',
    openMicrophoneFailedText: 'HTTPS環境下で、設定でマイクの使用が許可されていることを確認してください',
    stopResponding: '応答を停止する',
  },
  setting: {
    setting: '設定',
    randomAvatar: 'アバターをランダムに生成する',
    general: '一般',
    advance: '高度な設定',
    about: 'このアプリについて',
    avatarLink: 'アバターリンク',
    name: '名前',
    description: '説明',
    resetUserInfo: 'ユーザー情報をリセット',
    theme: 'テーマ',
    language: '言語',

    chatgpt_memory_title: '記憶力',
    chatgpt_memory_memo: '記憶力が強いほど、ChatGptは会話中に覚えている文脈が多くなりますが、より多くのコストがかかる可能性があります。',
    chatgpt_memory_choice_1: '記憶力が弱い(5件)',
    chatgpt_memory_choice_2: '記憶力が普通(20件)',
    chatgpt_memory_choice_3: '記憶力が強い(すべて)',

    chatgpt_top_p_title: '性格',
    chatgpt_top_p_1_memo: '正確な分析に傾くことで、ChatGptの無意味な発言の可能性を減らします。',
    chatgpt_top_p_2_memo: '回答の正確さと創造性のバランスを兼ね備える。',
    chatgpt_top_p_3_memo: 'ブレインストーミングモードで、より豊富な情報を提供する傾向があります。',
    chatgpt_top_p_choice_1: '正確性重視',
    chatgpt_top_p_choice_2: '一石二鳥',
    chatgpt_top_p_choice_3: 'アイデア出し重視',

    api: 'API',
    timeout: 'タイムアウト',
    socks: 'ソックス',
  },
  server: {
    PromptIsEmpty: 'こんにちは！今日は何かお手伝いできますか？',
    NotComplyPolicy: '申し訳ありませんが、送信されたコンテンツが私たちの使用ポリシーに準拠していません。当社のプラットフォームでは、ハラスメント、差別、暴力、ポルノグラフィ、その他の法律、規制、社会倫理に違反するコンテンツの投稿を禁止しています。ご質問がある場合は、開発者にお問い合わせいただくか、サポートをご利用ください。ありがとうございます。',
    SomethingWrong: '申し訳ありませんが、問題が発生しました。後でもう一度お試しください。',
    SomethingWrongInOpenaiGptApi: '申し訳ありませんが、OpenAI GPT APIへのアクセス中に問題が発生しました。後でもう一度お試しください。',
    SomethingWrongInOpenaiModerationApi: '申し訳ありませんが、OpenAI Moderation APIへのアクセス中に問題が発生しました。後でもう一度お試しください。',
    SomethingWrongInOpenaiWhisperApi: '申し訳ありませんが、OpenAI Whisper APIへのアクセス中に問題が発生しました。後でもう一度お試しください。',
  },
}

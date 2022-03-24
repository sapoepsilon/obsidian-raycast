import { List, ActionPanel, PushAction } from "@raycast/api";

import { Vault } from "../interfaces";

export function VaultSelection(props: { vaults: Vault[]; target: (path: Vault) => React.ReactFragment }) {
  const vaults = props.vaults;
  return (
    <List>
      {vaults?.map((vault) => (
        <List.Item
          title={vault.name}
          key={vault.key}
          actions={
            <ActionPanel>
              <PushAction title="Select Vault" target={props.target(vault)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
